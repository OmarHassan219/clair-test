import React, { useEffect, useState, useCallback, useMemo } from "react";
import BigNumber from "bignumber.js";
import toast, { Toaster } from "react-hot-toast";
import ConnectWalletButton from "../ConnectWalletButton";
import {
  useAccount,
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
  useWaitForTransaction,
  useBalance,
} from "wagmi";
import { parseUnits, parseEther, formatEther, formatUnits } from "viem";
import presaleAbi from "../../abi/presale.json";
import erc20Abi from "../../abi/erc20.json";
import {
  tokenAdd,
  usdcAdd,
  usdtAdd,
  contractAddr,
  chainId,
} from "../../config";
import { useTranslation } from "react-i18next";

export default function UsdcCurrency() {
  const [usdcAmount, setUsdcAmount] = useState("");
  const [usdcErrorMessage, setUsdcErrorMessage] = useState("");
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { t, i18n } = useTranslation();

  const { address } = useAccount();

  const balanceUsdc = useBalance({
    address: address,
    token: usdcAdd,
    chainId: chainId,
    enabled: !!address,
    watch: true,
  });
  const usdcBalanceBig = new BigNumber(balanceUsdc.data?.formatted);
  const isValidUsdc = usdcBalanceBig.gte(usdcAmount);

  const allowanceUsdcGet = useContractRead({
    address: usdcAdd,
    abi: erc20Abi,
    functionName: "allowance",
    enabled: !!address,
    args: [address, contractAddr],
    watch: true,
    chainId: chainId,
  });

  const { config: approveConfig } = usePrepareContractWrite({
    address: usdcAdd,
    abi: erc20Abi,
    functionName: "approve",
    args: [contractAddr, parseUnits(usdcAmount, 6)],
    enabled: !!address && !!usdcAmount && !!isValidUsdc,
    chainId: chainId,
  });

  const { data: approveData, write: approveWrite } =
    useContractWrite(approveConfig);

  const {
    isLoading: approveIsLoading,
    isSuccess: approveIsSuccess,
    isError: approveIsError,
  } = useWaitForTransaction({
    hash: approveData?.hash,
  });

  useEffect(() => {
    if (allowanceUsdcGet.data !== undefined) {
      const allowanceValue = new BigNumber(allowanceUsdcGet.data);
      setAllowance(allowanceValue);
    }
  }, [address, allowanceUsdcGet.data]);

  const { config } = usePrepareContractWrite({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "buyTokensWithUSDC",
    args: [parseUnits(usdcAmount, 6)],
    enabled: !!address && !!usdcAmount && !!allowance.gt(0),
    chainId: chainId,
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });

  const getAmount = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "getTokenAmountUSDC",
    args: [parseUnits(usdcAmount, 6)],
    enabled: !!usdcAmount,
    watch: true,
    chainId: chainId,
  });

  const getResult = new BigNumber(getAmount.data);
  let result = isNaN(getResult)
    ? 0
    : new BigNumber(getResult).dividedBy(new BigNumber(10).pow(6)).toFixed(3);

  useEffect(() => {
    if (isSuccess) {
      setAllowance(new BigNumber(0));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data?.hash) {
      setAllowance(new BigNumber(0));
    }
  }, [data?.hash]);
  const handleUsdcAmount = useMemo(
    () => (event) => {
      const inputValue = event.target.value;
      const parsedAmount = Number(inputValue);
     
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        setUsdcErrorMessage("Amount must be greater than zero");
      } else if (balanceUsdc.data?.formatted < parsedAmount) {
        setUsdcErrorMessage("Insufficient balance.");
      } else {
        setUsdcErrorMessage("");
      }
      setUsdcAmount(inputValue);
    },
    []
  );
  useEffect(() => {
    if (approveIsSuccess) {
      
      toast.success(
        <div className="text-center py-2">
          Success! Approval Complete
          <div>
            <a
              style={{ color: "#fff" }}
              href={`https://sepolia.etherscan.io/tx/${approveData?.hash}`}
            >
              View On Etherscan
            </a>
          </div>
        </div>
      );
      const timeout = setTimeout(() => {
        toast.dismiss();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [approveIsSuccess]);

  useEffect(() => {
    if (isSuccess) {
      setUsdcAmount("")
      result = 0
      toast.success(
        <div className="text-center py-2">
          Success! Purchase Complete
          <div>
            <a
              style={{ color: "#fff" }}
              href={`https://sepolia.etherscan.io/tx/${data?.hash}`}
            >
              View On Etherscan
            </a>
          </div>
        </div>
      );
      const timeout = setTimeout(() => {
        toast.dismiss();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(
        <div className="text-center py-2">Error! Something Went Wrong</div>
      );
      const timeout = setTimeout(() => {
        toast.dismiss();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isError]);

  return (
    <div>
         <div className="inputContainer">
        <div>
          <label htmlFor="paymentInput">USDC {t('YOU PAY')}:</label>
          <div className="inputBox">
            <input
              type="number"
              placeholder="0"
              name="usdcAmount"
              value={usdcAmount}
              onChange={handleUsdcAmount}
              step="any"
            />
            <img
                            className={`inputIcon ${document.body.dir === 'rtl' ? 'rtl' : ''}`}
              src="/images/coin.png"
              width={36}
              height={36}
              alt="usdc"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tokenInput">$CLAIR {t('YOU RECEIVE')}:</label>
          <div className="inputBox">
            <input type="number" placeholder={parseFloat(result).toLocaleString('en-US', {})} readOnly />
            <img
              className={`inputIcon ${document.body.dir === 'rtl' ? 'rtl' : ''}`}
              src="/images/clair.png"
              width={36}
              height={36}
              alt="coin"
            />
          </div>
        </div>
      </div>

      {usdcErrorMessage && <p style={{ color: "red" }}>{usdcErrorMessage}</p>}

      {address && (
        <>
          {allowance.toNumber() < usdcAmount ? (
            <div className="connectwallet">
              <button
                type="button"
                className="button w-button"
                disabled={!approveWrite || approveIsLoading}
                onClick={() => approveWrite()}
              >
                {approveIsLoading ? "Approving..." : "Approve"}
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="button w-button"
              disabled={!write || isLoading}
              onClick={() => write()}
            >
                            {isLoading ? t(`Buying`) : t(`Buy Now`)}
            </button>
          )}
        </>
      )}
      </div>
  );
}

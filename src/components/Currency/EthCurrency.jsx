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

export default function EthCurrency() {
  const [ethAmount, setEthAmount] = useState("");
  const [ethErrorMessage, setEthErrorMessage] = useState("");
  const { t, i18n } = useTranslation();
  const [stage, setSatges] = useState("");
  const { address } = useAccount();

  const balanceEth = useBalance({
    address: address,
    chainId: chainId,
    enabled: !!address,
    watch: true,
  });

  const ethBalanceBig = new BigNumber(balanceEth.data?.formatted);
  const isValidEth = ethBalanceBig.gte(ethAmount);
  const { config } = usePrepareContractWrite({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "buyTokensWithETH",
    value: [parseEther(ethAmount)],
    enabled: !!address && !!ethAmount && !!isValidEth,
    chainId: chainId,
  });
  // console.log("config", config);
  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });
  const getAmount = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "getTokenAmountETH",
    args: [parseEther(ethAmount)],
    enabled: !!ethAmount,
    watch: true,
    chainId: chainId,
  });
  const getBnbResult = new BigNumber(getAmount.data);
  let result = isNaN(getBnbResult) 
  ? 0
  : new BigNumber(getBnbResult)
  .dividedBy(new BigNumber(10).pow(18))
  .toFixed(3);

  useEffect(() => {
    if (isSuccess) {
      setEthAmount("")
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

  const handleEthAmount = useMemo(
    () => (event) => {
      const inputValue = event.target.value;
      const parsedAmount = Number(inputValue);
    
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        setEthErrorMessage(`${t('Amount must be greater than zero')}`);
      } else if (balanceEth.data?.formatted < parsedAmount) {
        setEthErrorMessage(`${t("Insufficient balance")}.`);
      } else {
        setEthErrorMessage("");
      }
      setEthAmount(inputValue);
    },
    []
  );

  

  return (
    <div>
      <div className="inputContainer">
        <div>
          <label htmlFor="paymentInput">ETH {t('YOU PAY')}:</label>
          <div className="inputBox">
            <input
              type="number"
              placeholder="0"
              name="ethAmount"
              value={ethAmount}
              onChange={handleEthAmount}
              step="any"
            />
            <img
                           className={`inputIcon ${document.body.dir === 'rtl' ? 'rtl' : ''}`}
              src="/images/eth.png"
              width={36}
              height={36}
              alt="eth"
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
      {ethErrorMessage && <p style={{ color: "red" }}>{ethErrorMessage}</p>}

      {address && (

      <button
        type="button"
        className="button w-button"
        disabled={!write || isLoading}
        onClick={() => write()}
      >
        {isLoading ? t(`Buying`) : t(`Buy Now`)}
      </button>
      )}
    </div>
  );
}

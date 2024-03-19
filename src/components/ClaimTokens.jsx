import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import toast, { Toaster } from "react-hot-toast";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useBalance,
} from "wagmi";
import { parseUnits, formatEther, formatUnits } from "viem";
import presaleAbi from "../abi/presale.json";
import { tokenAdd, usdcAdd, usdtAdd, contractAddr, chainId } from "../config";
import { useTranslation } from "react-i18next";

const ClaimToken = () => {
  const { address } = useAccount();
  const { t, i18n } = useTranslation();

  const getClaimableTokens = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "getClaimableTokens",
    enabled: !!address,
    args: [address],
    watch: true,
    chainId: chainId,
  });

  const balance = new BigNumber(getClaimableTokens.data).dividedBy(new BigNumber(10).pow(18)).toFixed(3);

  const { config } = usePrepareContractWrite({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "claimTokens",
    enabled: !!address,
    chainId: chainId,
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        <div className="text-center py-2">
          {t('Success! Token has been claimed.')}
          <div>
            <Link
              style={{ color: "#fff" }}
              href={`https://etherscan.io/tx/${data?.hash}`}
            >
              
          {t('View On Etherscan')}

            </Link>
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
        <div className="text-center py-2">{t('Error! Something Went Wrong')}</div>
      );
      const timeout = setTimeout(() => {
        toast.dismiss();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isError]);

  return (
    <div className="text-center">
      {balance == 0 ? (
        <><p>{t('Already Claimed Token. Check your wallet. Thanks.')}</p><button
          type="button"
          className="button w-button"
          disabled
        >
          {t('Claimed')}
        </button></>
      ) : (
        <>
      {address && (
        <>
          <br />
          <p>{t('Claimable Tokens:')} {parseFloat(balance).toLocaleString('en-US', {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    })} $CLAIR</p>
            <button
              type="button"
              className="button w-button"
              disabled={!write || isLoading} 
              onClick={() => write()}
            >
              {isLoading ? t('Claiming...') : t('Claim Now')}
            </button>
        </>
      )}
      </>
      )}
    </div>
  );
}

export default ClaimToken;

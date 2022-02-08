import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../Wallet/connector";
import { useDispatch } from "react-redux";
import { getAccountDetails } from "../store/actionTypes";

function ConnectWallet() {
  const [isMetaMask, setIsMetaMask] = useState(false);
  const dispatch = useDispatch();
  const { active, account, activate } = useWeb3React();

  useEffect(() => {
    if (active) {
      dispatch(
        getAccountDetails({
          account,
          active,
        })
      );
    }
  }, [active, account, dispatch]);

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      setIsMetaMask(true);
    }
  }, []);

  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col ">
      <h1 className="text-gray-600 text-xl md:text-2xl mb-6">
        You need to {isMetaMask ? "connect to the" : "Install"}{" "}
        <span className="text-gray-800 font-semibold">Metamask</span> wallet
      </h1>
      {isMetaMask ? (
        <button
          className="bg-green-500 text-gray-50 py-2 px-4 rounded cursor-pointer hover:shadow-lg"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <button className="bg-green-500 text-gray-50 py-2 px-4 rounded cursor-pointer hover:shadow-lg">
          Install Metamask
        </button>
      )}
    </div>
  );
}

export default ConnectWallet;

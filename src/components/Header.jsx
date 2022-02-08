import React from "react";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { disconnectUserWallet } from "../store/actionTypes";

const Header = ({ account }) => {
  const { deactivate } = useWeb3React();
  const dispatch = useDispatch();
  const disconnectWallet = async () => {
    try {
      deactivate();
      dispatch(disconnectUserWallet());
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="py-3 bg-white shadow-md h-16">
      <div className="w-4/5 mx-auto flex justify-between items-center h-full">
        <div className="">
          <h3 className="text-gray-800 font-semibold text-xl">Dapp</h3>
        </div>
        <div className="flex justify-center items-center">
          <div
            className=" h-10 border w-40 border-green-600 shadow-green-500 shadow text-center   rounded-md text-gray-700 font-semibold  overflow-hidden  px-3 py-2 cursor-pointer hover:shadow-lg mr-6"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {account}
          </div>
          <button
            className="w-40 px-4 py-2 bg-red-500 hover:bg-red-600 cursor-pointer rounded text-gray-50"
            onClick={disconnectWallet}
          >
            Disconnect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

function NFTCard({ imageUrl }) {
  return (
    <div className="w-80 rounded-md overflow-hidden bg-white shadow hover:shadow-lg cursor-pointer mr-6 mb-6 transition hover:-translate-y-1">
      <div className="w-full h-60 overflow-hidden">
        <img src={imageUrl} alt="NFT" className="w-full object-cover h-full" />
      </div>
      <div className="p-3">
        <div className="flex justify-between  mb-10">
          <p className="flex flex-col">
            <span className="text-gray-800 font-semibold">Polygon</span>
            <span className="text-sm text-gray-600">Picasso kid ape</span>
          </p>
          <p className="flex flex-col">
            <span className="text-gray-600">Price</span>
            <span className="flex justify-center items-center">
              {" "}
              <FaEthereum className="mr-2" />{" "}
              <span className="text-gray-800 font-semibold">0.005</span>
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="">Buy now</p>
          <p className="flex justify-center items-center">
            <AiOutlineHeart className="mr-2" /> <span>0</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;

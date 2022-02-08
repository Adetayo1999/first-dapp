import React from "react";
import NFTCard from "./components/NFTCard";
import data from "./data.json";

function Home() {
  return (
    <div className="mt-4">
      <h1 className="text-center text-gray-700 font-semibold text-2xl mb-6">
        Get An NFT Here
      </h1>
      <div className="w-4/5 mx-auto flex  items-center flex-wrap">
        {data.map((item, index) => (
          <NFTCard key={index} imageUrl={item.imageURL} />
        ))}
      </div>
    </div>
  );
}

export default Home;

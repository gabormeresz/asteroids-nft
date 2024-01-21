"use server";

import { ethers } from "ethers";
import { contractABI, contractAddress } from "@/constants";

export const getMintedTokenId = async (address: string | undefined) => {
  if (!address) return;
  try {
    const provider = new ethers.JsonRpcProvider(
      process.env.POLYGON_MUMBAI_RPC_PROVIDER
    );
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );

    const userTokenCount = await contract.balanceOf(address);

    if (parseInt(userTokenCount) === 0) {
      return undefined;
    } else {
      const userTokenId = await contract.tokenOfOwnerByIndex(address, 0);
      return parseInt(userTokenId);
    }
  } catch (err) {
    console.error("Error fetching tokenId from smart contract:", err);
  }
};

import { ethers } from "ethers";
import { contractABI, contractAddress } from "@/constants";

export const getTokenURIAndOwner = async (tokenId: string) => {
  let tokenURI = "";
  let tokenOwner = "";
  try {
    const provider = new ethers.JsonRpcProvider(
      process.env.POLYGON_MUMBAI_RPC_PROVIDER
    );
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );
    tokenURI = await contract.tokenURI(tokenId);
    tokenOwner = await contract.ownerOf(tokenId);
  } catch (err) {
    console.error("Error fetching data from smart contract:", err);
  }
  return [tokenURI, tokenOwner];
};

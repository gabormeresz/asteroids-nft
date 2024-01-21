import { ethers } from "ethers";
import { contractABI, contractAddress } from "@/constants";

export const getTotalMintedItems = async () => {
  try {
    const provider = new ethers.JsonRpcProvider(
      process.env.POLYGON_MUMBAI_RPC_PROVIDER
    );
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );
    const totalSupply = parseInt(await contract.totalSupply());
    return totalSupply;
  } catch (err) {
    console.error("Error loading data from contract", err);
  }
};

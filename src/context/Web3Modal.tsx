"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID as string;

// 2. Set chains
const mumbai = {
  chainId: 80001,
  name: "Polygon Mumbai",
  currency: "MATIC",
  explorerUrl: "https://mumbai.polygonscan.com/",
  rpcUrl: "https://rpc-mumbai.maticvigil.com/"
};

// 3. Create modal
const metadata = {
  name: "Asteroids",
  description: "A Collection of 100 AI generated asteroid NFTs",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"]
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mumbai],
  defaultChain: mumbai,
  projectId
});

interface Props {
  children: React.ReactNode;
}

export function Web3ModalProvider({ children }: Props) {
  return children;
}

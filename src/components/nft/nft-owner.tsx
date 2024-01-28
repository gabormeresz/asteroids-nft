"use client";

import { useState, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import truncateEthAddress from "truncate-eth-address";

type ShowNftOwnerProps = {
  owner: string;
};

const ShowNftOwner = ({ owner }: ShowNftOwnerProps) => {
  const { address } = useWeb3ModalAccount();
  const [text, setText] = useState("Owned by: ");

  useEffect(() => {
    setText(
      `Owned by: ${owner === address ? "you" : truncateEthAddress(owner)}`
    );
  }, [address]);

  return <p className="text-sm text-gray-300">{text}</p>;
};

export default ShowNftOwner;

"use client";

import { useState, useEffect } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import Button from "@/components/ui/button";

const ConnectButton = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const [buttonText, setButtonText] = useState("LOADING...");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (isConnected) {
      setButtonText("CONNECTED");
      setDisableButton(true);
    } else {
      setButtonText("CONNECT");
      setDisableButton(false);
    }
  }, [isConnected]);

  return (
    <div>
      <Button
        text={buttonText}
        disabled={disableButton}
        onClick={() => open()}
      />
    </div>
  );
};

export default ConnectButton;

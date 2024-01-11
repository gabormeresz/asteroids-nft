import Link from "next/link";
import { jura } from "@/fonts";
import Loading from "@/components/ui/loading";

interface MintingModalProps {
  hash: string;
  closeModal?: () => void;
}

const MintingModal = ({ hash }: MintingModalProps) => {
  console.log("modal opened");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-cente bg-[#111111] text-white p-12 pt-0 rounded-2xl shadow-lg">
        <Loading customText="Minting in progress..." />
        <Link
          href={`https://mumbai.polygonscan.com/tx/${hash}`}
          className={`font-light text-sm ${jura.variable} font-mono`}
          target="_blank"
        >
          {`view transaction on polygonscan ->`}
        </Link>
      </div>
    </div>
  );
};

export default MintingModal;

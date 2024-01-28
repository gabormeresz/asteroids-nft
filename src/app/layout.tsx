import { Web3ModalProvider } from "@/context/Web3Modal";
import Header from "@/components/layout/header";
import Footer from "@/components//layout/footer";
import backgroundImage from "../../public/background.jpg";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://asteroids-nft.vercel.app"),
  title: "Asteroids NFT",
  description: "A Collection of 100 AI generated asteroid NFTs",
  openGraph: {
    images: "/asteroid-3.jpg"
  }
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Web3ModalProvider>
        {/* <body className="bg-[#1E2631] sm:bg-[url('../../public/background.jpg')] bg-cover bg-fixed bg-center h-screen h-full overflow-auto"> */}
        <body className=" h-screen h-full overflow-auto">
          <div className="-z-10 fixed bg-cover bg-fixed bg-center bg-[url('../../public/background.jpg')] w-full h-full left-0 top-0"></div>
          <div className="h-full flex flex-col justify-between gap-4">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </Web3ModalProvider>
    </html>
  );
}

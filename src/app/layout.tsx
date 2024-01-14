import { Web3ModalProvider } from "@/context/Web3Modal";
import Header from "@/components/layout/header";
import Footer from "@/components//layout/footer";
import backgroundImage from "../../public/background.jpg";
import "./globals.css";

export const metadata = {
  title: "Asteroids NFT",
  description: "A Collection of 100 AI generated asteroid NFTs",
  openGraph: {
    images: "/background.jpg"
  }
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Web3ModalProvider>
        <body
          style={{
            backgroundImage: `url(${backgroundImage.src})`
          }}
          className="bg-cover bg-fixed bg-center h-screen h-full overflow-auto"
        >
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

import dynamic from "next/dynamic";
import Image from "next/image";
import { jura } from "@/fonts";
import Loading from "./collection/loading";
import asteroid1 from "../../public/asteroid-1.jpg";
import asteroid2 from "../../public/asteroid-2.jpg";
import asteroid3 from "../../public/asteroid-3.jpg";
import asteroid4 from "../../public/asteroid-4.jpg";
import asteroid5 from "../../public/asteroid-5.jpg";

const HomeDynamicContent = dynamic(
  () => import("@/components/home/home-dynamic"),
  { ssr: false, loading: () => <Loading /> }
);
export default function Home() {
  const asteroidsImgClassName = "rounded-3xl w-1/5 p-1 sm:p-2";
  const asteroids = [asteroid1, asteroid2, asteroid3, asteroid4, asteroid5];

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-10">
        <h1
          className={`uppercase text-3xl tracking-widest font-light ${jura.variable} font-mono text-white px-10 text-center`}
        >
          The Asteroids Collection
        </h1>
        <div className="flex flex-row items-center justify-between max-w-7xl px-1 sm:px-8">
          {asteroids.map((asteroid, index) => (
            <Image
              key={index}
              src={asteroid}
              alt="asteroid"
              className={asteroidsImgClassName}
            />
          ))}
        </div>
      </div>

      <HomeDynamicContent />
    </div>
  );
}

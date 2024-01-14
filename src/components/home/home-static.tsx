import Image from "next/image";
import { jura } from "@/fonts";
import asteroid1 from "../../../public/asteroid-1.jpg";
import asteroid2 from "../../../public/asteroid-2.jpg";
import asteroid3 from "../../../public/asteroid-3.jpg";
import asteroid4 from "../../../public/asteroid-4.jpg";
import asteroid5 from "../../../public/asteroid-5.jpg";

const HomeStaticContent = () => {
  const asteroidsImgClassName = "rounded-3xl w-1/5 p-1 sm:p-2";

  return (
    <div className="flex flex-col items-center gap-10">
      <h1
        className={`uppercase text-3xl tracking-widest font-light ${jura.variable} font-mono text-white px-10 text-center`}
      >
        The Asteroids Collection
      </h1>
      <div className="flex flex-row items-center justify-between max-w-4xl px-1 ">
        <Image
          src={asteroid1}
          alt="asteroid"
          className={asteroidsImgClassName}
        />
        <Image
          src={asteroid2}
          alt="asteroid"
          className={asteroidsImgClassName}
        />
        <Image
          src={asteroid3}
          alt="asteroid"
          className={asteroidsImgClassName}
        />
        <Image
          src={asteroid4}
          alt="asteroid"
          className={asteroidsImgClassName}
        />
        <Image
          src={asteroid5}
          alt="asteroid"
          className={asteroidsImgClassName}
        />
      </div>
    </div>
  );
};

export default HomeStaticContent;

import Link from "next/link";
import { jura } from "@/fonts";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2
        className={`text-white text-6xl font-light ${jura.variable} font-mono`}
      >
        404
      </h2>
      <p
        className={`text-white text-lg font-light ${jura.variable} font-mono pb-8`}
      >
        This page could not be found
      </p>
      <Link href="/">
        <Button text="BACK TO HOME" secondary />
      </Link>
    </div>
  );
}

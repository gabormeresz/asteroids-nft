import dynamic from "next/dynamic";
import HomeStaticContent from "@/components/home/home-static";
import Loading from "./collection/loading";

const HomeDynamicContent = dynamic(
  () => import("@/components/home/home-dynamic"),
  { ssr: false, loading: () => <Loading /> }
);
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <HomeStaticContent />
      <HomeDynamicContent />
    </div>
  );
}

import { jura } from "@/fonts";
import Spinner from "@/components/ui/spinner";

interface LoadingProps {
  customText?: string;
}

const Loading = ({ customText }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center gap-4 grow justify-center min-h-48">
      <Spinner />
      <p className={`text-white text-lg font-light ${jura.variable} font-mono`}>
        {customText || "Loading..."}
      </p>
    </div>
  );
};

export default Loading;

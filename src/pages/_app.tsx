import { type AppType } from "next/dist/shared/lib/utils";

import Nav from "@/components/Nav";
import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="absolute inset-0 w-full overflow-x-hidden">
      <div className="flex min-h-full w-full bg-yummy-black font-['system-ui'] text-white">
        <Nav />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;

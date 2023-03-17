import { type AppType } from "next/dist/shared/lib/utils";

import Nav from "@/components/Nav";
import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="absolute inset-0 w-full overflow-hidden">
      <div className="flex h-full w-full bg-yummy-black text-white">
        <Nav />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;

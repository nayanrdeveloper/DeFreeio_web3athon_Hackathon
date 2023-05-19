import Navbar from "@/layouts/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-primary-black">
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

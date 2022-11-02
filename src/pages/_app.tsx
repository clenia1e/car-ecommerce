import type { AppProps } from "next/app";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "../components/Home/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Home />
      {/* <Component {...pageProps} />; */}
    </div>
  );
}

export default MyApp;

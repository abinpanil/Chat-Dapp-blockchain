import { Navbar } from "@/Components";
import { ChatAppProvider } from "@/Context/ChatAppContext";
import { handleNetworkSwitch } from "@/Context/constant";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    handleNetworkSwitch();
  }, [])
  return <ChatAppProvider>
    <Navbar />
    <div className="container">
      <Component {...pageProps} />
    </div>
  </ChatAppProvider>
}

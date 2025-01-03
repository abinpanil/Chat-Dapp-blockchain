import { Navbar } from "@/Components";
import { ChatAppProvider } from "@/Context/ChatAppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div>
    <ChatAppProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChatAppProvider>
  </div>;
}

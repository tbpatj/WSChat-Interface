import { DataProvider } from "../components/context/GlobalData";
import { WebSocketProvider } from "../components/context/Websocket/WebSocket";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <WebSocketProvider>
        <Component {...pageProps} />
      </WebSocketProvider>
    </DataProvider>
  );
}

export default MyApp;

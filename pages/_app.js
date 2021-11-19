import AnnouncementBar from "../components/AnnouncementBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AnnouncementBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

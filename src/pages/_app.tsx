import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesConntext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;

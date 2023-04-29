import "tailwindcss/tailwind.css";
import { AuthUserProvider } from "../../firebase/useFireBaseAuth";

export default function App({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

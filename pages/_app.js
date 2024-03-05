import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'mumbai';

function MyApp({ Component, pageProps }) {
  return (
//	<ThirdwebProvider
//		activeChain={activeChain}
//		clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
//	>
//		<Component {...pageProps} />
//	</ThirdwebProvider>

    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
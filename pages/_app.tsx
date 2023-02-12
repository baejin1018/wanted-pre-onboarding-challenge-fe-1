import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

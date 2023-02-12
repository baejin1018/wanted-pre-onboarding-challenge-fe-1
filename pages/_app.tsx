import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import dynamic from "next/dynamic";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const DynamicHeader = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <DynamicHeader />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

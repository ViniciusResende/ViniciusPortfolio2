import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { ContactContextProvider } from '../contexts/ContactContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContactContextProvider>
      <Component {...pageProps} />
    </ContactContextProvider>
  );
}
export default MyApp;

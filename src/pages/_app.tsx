import { AppProps } from 'next/app';
import '../styles/global.scss';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "Aa3wIuC9eXQSpPEIKGCCPTKk07WHNdJX0PWt6m_pZOzgwaGibS98u_vf1W3v6gfbk0w2Uc3lMo8_NoYf",
  "currency": "BRL",
  intent: "capture"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp;

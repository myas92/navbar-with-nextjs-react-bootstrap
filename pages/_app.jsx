import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
export default function MyApp({ Component, pageProps }) {

  return (
    <SSRProvider>
          <Component {...pageProps} />
    </SSRProvider>
  )
}
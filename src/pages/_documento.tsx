import Documento, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        <Html>
            <Head>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}
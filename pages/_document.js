import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dci8xvvvp/image/upload/v1674581434/assets/webDev_dagmoe.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

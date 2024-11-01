import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Portfolio page" />
        <meta name="keywords" content="graphic design, branding design, web design, portfolio, creative solutions" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="author" content="Madoka Nogaki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

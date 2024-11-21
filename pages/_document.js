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
        {/* Font */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link> */}
        <link rel="stylesheet" href="https://use.typekit.net/xkb4eac.css"></link>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Madoka Nogaki | A graphic & web designer based in Vancouver/Victoria" />
        <meta name="keywords" content="graphic design, branding design, web design, portfolio, creative solutions" />
        <meta name="author" content="Madoka Nogaki" />
        <meta property="og:title" content="Madoka Nogaki | A graphic & web designer based in Vancouver/Victoria" />
        {/* <meta property="og:description" content="" /> */}
        <meta property="og:image" content="https://workwithmadoka.com/images/logo_horizontal.svg" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=8"></meta>{/* it fixed a bug on Arc browser */}
        {/* Font */}
        <link rel="stylesheet" href="https://use.typekit.net/xkb4eac.css"></link>
        <link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

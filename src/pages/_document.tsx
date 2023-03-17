import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Yummy</title>
      <meta
        name="description"
        content="An assignment project of Route Egypt."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
      />
      {/* Google Font Here */}
      <link rel="icon" href="favicon.ico" />
      {/* Add the app-wide default classes to the body's className. */}
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

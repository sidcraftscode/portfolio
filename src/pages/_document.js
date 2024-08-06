import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://rsms.me/"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      <body class="bg-black">
        <div className="border-t-8 border-purple-500">
        <Main />
        <NextScript />
        </div>
      </body>
    </Html>
  );
}

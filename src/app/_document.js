/* eslint-disable @next/next/no-document-import-in-page */
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', (e) => {
              const xPos = e.clientX / window.innerWidth;
              const yPos = e.clientY / window.innerHeight;
              document.body.style.backgroundImage = \`radial-gradient(circle closest-side at ${xPos * 100}% ${yPos * 100}%, rgba(255,255,255,0.2), rgba(12, 18, 35, 0.15))\`;
            });
          `
        }} />

        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    );
  }
}

export default MyDocument;

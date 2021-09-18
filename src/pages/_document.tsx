import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap'
            rel='stylesheet'
          />

          <link rel='shortcut icon' href='/favicon.ico' type='icon' />
          <meta name='theme-color' content='#FFFFFF' />
          <meta
            name='description'
            content='Portifólio Vinícius Alves: Contato, informações, projetos e mais.'
          />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

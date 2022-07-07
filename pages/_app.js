import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.scss'
import { Layout } from '../components'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="author" content="Jovan R." />
        <meta
          name="keywords"
          content="blog, metaverse, trading, crypto, token, matic"
        />
        <title>Blogmart Has The Answer To (almost) Everything </title>
        <meta
          name="description"
          content="An honest firsthand opinion - follow this steps to save on trading. Choose the best deal and solution for product you are planning to purchase."
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
        </Script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

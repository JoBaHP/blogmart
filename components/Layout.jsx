import React from 'react'
import Header from './Header'
import Head from 'next/head'
import Script from 'next/script'

const Layout = ({ children }) => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-21SLX3K5TB"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-21SLX3K5TB');
        `}
    </Script>
    <Head>
      <title>Blogmart Has The Answer To (almost) Everything </title>
      <meta
        name="description"
        content="An honest firsthand opinion - follow this steps to save money on trading. Choose the best deal and solution for product you are planning to purchase."
      />
    </Head>
    <Header />
    {children}
  </>
)

export default Layout

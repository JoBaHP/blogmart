import React from 'react'
import Header from './Header'
import Head from 'next/head'

const Layout = ({ children }) => (
  <>
    <Head></Head>
    <Header />
    {children}
  </>
)

export default Layout

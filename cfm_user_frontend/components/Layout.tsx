import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

interface LayoutInfo{
    title ?: string,
    children : React.ReactNode,
    description ?:string,
    keywords ?: string

}

export default function Layout({children,title,description,keywords}: LayoutInfo) {
  return (
   <div>
    <Head>
    <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
    </Head>
    <Navbar />
    <hr/>
    {children}
   </div>
  )
}

Layout.defaultProps = {
    title : 'CFM | Code For Money',
    description : 'Find the best coding work and get the money',
    keywords : 'Code,Money,Work'
}

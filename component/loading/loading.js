import React from 'react'
import Head from 'next/head';


const Loading = ({title}) => {
    return (
        <> 
        <Head>
          <title>{title}</title> 
        </Head>
        <>
          <div id="loader" className="nfLoader"></div>
        </>
            
        </>
    )
}

export default Loading
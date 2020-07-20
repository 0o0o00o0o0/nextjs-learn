import React from 'react';
import Head from 'next/head';
export default (prop: { title?: string }) => (
    <div>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <title>{prop.title || '测试一下'}</title>
            <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <style jsx global>{`  
         *{
              margin:0;
              padding:0;
              box-sizing: border-box;
            }
            body,html {
                width: 100%;
                height: 100%;
      }
    `}</style>
    </div>
);
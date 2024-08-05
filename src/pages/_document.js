import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class GoogleTagManager extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MS3PGCXS"
                            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
                        </iframe>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default GoogleTagManager
import React from 'react'

import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../routes'

export const render = (req) => {
    const content = renderToString((
        <StaticRouter context={{}} location={req.path}>
            {Routes}
        </StaticRouter>
      ))
    
    return (`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>first lesson</h1>
            <p>hello world</p>
            <div id="root">${content}</div>
        </body>
        <script src="/bundle.js"></script>
        </html>
    `)
}

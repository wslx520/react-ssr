import express from 'express'

import cors from 'cors'

import React from 'react'
import serialize from 'serialize-javascript'
import {renderToString} from 'react-dom/server'
import App from '../shared/App'
import {matchPath, StaticRouter} from 'react-router-dom'
import routes from '../shared/routes'

const app = express();
const port = 3001;

app.use(cors());

app.use(express.static('public'))


app.get('*', (req, res, next) => {

    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
    console.log('activeRoute', activeRoute)
    const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();



    promise.then(data => {
        const context = {data};
        const name = 'server';
        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        )

        res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React SSR with react-router</title>
    <link href="/public/main.css" rel="stylesheet" />
    <script src="/bundle.js" defer></script>
    <script>window.__INITIAL_DATA__ = ${serialize(data)};</script>
</head>
<body>
    <div id="app">${markup}</div>
</body>
</html>    
    `)
    }).catch(next)
    
})

app.listen(port, () => {
    console.log(`Server is started on port: ${port}`)
})
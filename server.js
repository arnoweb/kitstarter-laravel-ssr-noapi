import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

const app = express();

async function startServer() {
    const vite = await createViteServer({
        server: { middlewareMode: 'ssr' }
    });

    app.use(vite.middlewares);

    app.get('/', async (req, res) => {
        try {
            const url = req.originalUrl;
            let template = fs.readFileSync(path.resolve('resources/views/app.blade.php'), 'utf-8');
            template = await vite.transformIndexHtml(url, template);

            const { render } = await vite.ssrLoadModule(path.resolve('/resources/js/ssr.jsx'));
            const appHtml = render();

            const html = template.replace('<!--ssr-outlet-->', appHtml);
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
            console.log('SSR server running at http://localhost:5173');
        } catch (e) {
            vite.ssrFixStacktrace(e);
            console.log(e);
            res.status(500).end(e.message);
        }
    });

    app.listen(5173, () => {
        console.log('SSR server running at http://localhost:5173');
    });
}

startServer();


/*
import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

const app = express();

async function startServer() {
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    });

    // Use Vite's middlewares
    app.use(vite.middlewares);

    // Serve static files
    app.use(express.static('public'));

    // Single middleware to handle all routes
    app.use(async (req, res) => {
        try {
            const url = req.originalUrl;
            let template = fs.readFileSync(
                path.resolve('resources/views/app.blade.php'),
                'utf-8'
            );
            template = await vite.transformIndexHtml(url, template);

            const { render } = await vite.ssrLoadModule('/resources/js/ssr.jsx');
            const appHtml = render();

            const html = template.replace('<!--ssr-outlet-->', appHtml);
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
            vite.ssrFixStacktrace(e);
            console.error(e);
            res.status(500).send(e.message);
        }
    });

    app.listen(5173, () => {
        console.log('SSR server running at http://localhost:5173');
    });
}

startServer().catch((e) => {
    console.error(e);
    process.exit(1);
});
*/

import { createInertiaApp } from '@inertiajs/react';
import { renderToString } from 'react-dom/server';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`).default,
    setup({ App, props }) {
        return renderToString(<App {...props} />);
    },
});


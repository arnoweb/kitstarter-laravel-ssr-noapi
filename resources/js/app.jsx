import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Navbar from './Components/Navbar';

createInertiaApp({
    resolve: async name => {
        const module = await import(`./Pages/${name}.jsx`);
        return module.default;
    },
    setup({ el, App, props }) {

        console.log(props.initialPage.props.menuItems);

        return createRoot(el).render(
            <>
                {<Navbar menuItems={props.initialPage.props.menuItems || []} />}

                <App {...props} />
            </>
        );
    },
});

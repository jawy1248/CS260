import { defindConfig } from 'vite';

export default defindConfig({
    server: {
        proxy: {
            '/api': 'http://localhost:4000',
            '/ws': {
                target: 'ws://localhost:4000',
                ws: true,
            },
        },
    },
});
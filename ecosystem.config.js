module.exports = {
    apps: [
        {
            name: 'API',
            script: 'index.js',
            instances: 4,
            exec_mode: 'cluster',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};

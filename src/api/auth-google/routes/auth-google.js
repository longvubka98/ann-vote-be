module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/auth-google/login',
            handler: 'auth-google.login',
            config: {
                auth: false,
            },
        }
    ]
}
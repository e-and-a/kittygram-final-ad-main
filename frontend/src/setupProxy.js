const { createProxyMiddleware } = require('http-proxy-middleware');

const target = process.env.REACT_APP_API_PROXY || 'http://localhost:9000';

module.exports = function setupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );

  app.use(
    '/admin',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );

  app.use(
    '/media',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};

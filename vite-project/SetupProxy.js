const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "https://movix-full-site-9.onrender.com",
      changeOrigin: true,
    })
  );
};

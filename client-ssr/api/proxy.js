import { createProxyMiddleware } from "http-proxy-middleware";

const apiProxy = createProxyMiddleware({
  target: "http://localhost:5000",
  changeOrigin: true,
  pathRewrite: { [`^/api/proxy`]: "" },
  secure: false,
});

export default function (req, res) {
  apiProxy(req, res, (result) => {
    if (result instanceof Error) throw result;
    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}

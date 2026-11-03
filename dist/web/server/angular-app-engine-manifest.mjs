
export default {
  basePath: "/",
  allowedHosts: [
  "iyaseleofohordua.org",
  "www.iyaseleofohordua.org",
  "*.vercel.app",
  "localhost",
  "127.0.0.1"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    "": () => import('./main.server.mjs')
  },
};

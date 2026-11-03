import { reqHandler } from '../dist/web/server/server.mjs';

export default function handler(req, res) {
  return reqHandler(req, res);
}

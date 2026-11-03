
module.exports = async (req, res) => {
  const { reqHandler } = await import('../dist/web/server/server.mjs');

  return reqHandler(req, res);
};

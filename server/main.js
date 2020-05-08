const http = require('http');
const specs = require('../contract/specs');
const controllers = require('../contract/controllers');
const responders = require('./responders');

const getRouteSpecs = (method, path) => {
  if (!specs.paths[path]) throw new Error(`Undocumented path ${path}`);
  if (!specs.paths[path][method]) throw new Error(`Undocumented route ${method} ${path}`);
  return specs.paths[path][method];
};
const getResponder = (routeSpecs) => {
  const type = routeSpecs['x-type'];
  if (!responders[type]) throw new Error(`Responder ${type} does not exist`);
  return responders[type];
};

http.createServer(async (req, res) => {
  try {
    const method = req.method.toLowerCase();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (!specs.paths[req.url]) {
      res.writeHead(404);
      res.end();
      return;
    }
    if (method === 'options') {
      res.writeHead(200);
      res.end();
      return;
    }
    const routeSpecs = getRouteSpecs(method, req.url);
    const responder = getResponder(routeSpecs);
    const controller = controllers[req.url][method];
    const response = await responder(req, routeSpecs, controller);

    res.writeHead(200);
    res.end(JSON.stringify(response));
  } catch (e) {
    console.log(e);
    res.writeHead(500);
    res.end('Internal server error\n');
  }
}).listen(8080);

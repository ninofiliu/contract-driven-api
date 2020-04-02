const fs = require('fs');

const apiRoot = `${__dirname}/../../api`;
const routes = {};
const addFilesInRoute = (route) => {
  fs.readdirSync(`${apiRoot}${route}`).forEach((child) => {
    if (fs.statSync(`${apiRoot}${route}/${child}`).isDirectory()) {
      return addFilesInRoute(`${route}/${child}`);
    }
    if (!child.endsWith('.json')) return;
    if (!routes[route]) routes[route] = [];
    routes[route].push(child);
  });
};
addFilesInRoute('');

const getObjectName = (route, file) => `${route}/${file}`
  .replace(/^\//, '')
  .replace(/\.json/, '')
  .replace(/-/g, '_')
  .replace(/\//g, '__');

const lines = [];
lines.push('// File generated by routes.builder.js');
lines.push('/* eslint-disable camelcase */');
lines.push('');

Object.entries(routes).forEach(([route, files]) => {
  files.forEach((file) => {
    const objectName = getObjectName(route, file);
    lines.push(`import ${objectName} from '../../api${route}/${file}';`);
  });
});

lines.push('');
lines.push('export default {');
Object.entries(routes).forEach(([route, files]) => {
  lines.push(`  '${route}': {`);
  files.forEach((file) => {
    const key = file.replace(/\.json$/, '');
    const objectName = getObjectName(route, file);
    lines.push(`    ${key}: ${objectName},`);
  });
  lines.push('  },');
});
lines.push('};');
lines.push('');

fs.writeFileSync(`${__dirname}/routes.js`, lines.join('\n'));

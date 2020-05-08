const fs = require('fs');
const yaml = require('yaml');
const JsonRefs = require('json-refs');

(async () => {
  try {
    const yamlSpecs = fs.readFileSync(`${__dirname}/../contract/specs.yml`, 'utf8');
    const unresolvedSpecs = yaml.parse(yamlSpecs);
    const { resolved: resolvedSpecs } = await JsonRefs.resolveRefs(unresolvedSpecs);
    const jsonResolvedSpecs = JSON.stringify(resolvedSpecs, null, 2);
    fs.writeFileSync(`${__dirname}/../contract/specs.json`, jsonResolvedSpecs);
  } catch (e) {
    console.log(e);
  }
})();

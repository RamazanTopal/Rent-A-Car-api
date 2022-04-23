const awilix = require('awilix');

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Load our modules!
container.loadModules([
  'src/**/*.service.js',
], {
  formatName: 'camelCase',
  // Apply resolver options to all modules.
  resolverOptions: {
    lifetime: awilix.Lifetime.TRANSIENT,
    register: awilix.asClass,
  },
});

container.loadModules([
  [
    'src/models/*.js',
    {
      register: awilix.asValue,
      lifetime: awilix.Lifetime.SINGLETON,
    },
  ],
], {
  formatName: (name) => `${name}Schema`,
  resolverOptions: {
    lifetime: awilix.Lifetime.SINGLETON,
    register: awilix.asClass,
  },
});

module.exports = {
  container,
};

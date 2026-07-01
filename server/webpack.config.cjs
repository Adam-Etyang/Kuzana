const path = require('path');
const fs = require('fs');

/**
 * The project uses ESM-style .js extensions in TypeScript imports and a
 * "type": "module" package. NestJS's default webpack output is CommonJS,
 * which cannot execute as .js in an ESM package. We emit the bundle as
 * main.cjs and create a thin ESM wrapper (main.js) so `nest start` and
 * `node dist/main` continue to work unchanged.
 */
class EsmWrapperPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('EsmWrapperPlugin', () => {
      const outputPath = compiler.options.output.path;
      const wrapperPath = path.join(outputPath, 'main.js');
      fs.writeFileSync(
        wrapperPath,
        "import cjs from './main.cjs';\nexport default cjs;\n",
      );
    });
  }
}

module.exports = function (config) {
  // Resolve @/* aliases to the project root.
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@': path.resolve(__dirname),
  };

  // Let .js imports resolve to .ts source files (TypeScript ESM convention).
  config.resolve.extensionAlias = {
    '.js': ['.ts', '.js'],
    '.mjs': ['.mts', '.mjs'],
  };

  // Emit the actual bundle as CommonJS with a .cjs extension.
  config.output = config.output || {};
  config.output.filename = 'main.cjs';

  config.plugins = config.plugins || [];
  config.plugins.push(new EsmWrapperPlugin());

  return config;
};

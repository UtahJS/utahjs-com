const mode = process.env.npm_lifecycle_event;
let mix = require("laravel-mix");

const resources_path = `./assets/`;
const compiled_path = `./assets/compiled/`;
const public_path = `./../${compiled_path}`;
const webpack_config = {
  output: {
    publicPath: `/${compiled_path}`,
    chunkFilename: "chunks/chunk-[name].[chunkhash].js"
  },
};

// Provide source maps if not in development mode.
if (mode != `production`) {
  webpack_config.devtool = "source-map";
  mix.sourceMaps();
}

mix.setPublicPath(`./${public_path}`);
mix.setResourceRoot(``);
mix.webpackConfig(webpack_config);

mix
  .sass(`${resources_path}/sass/style.scss`, `${public_path}`)
  .js(`${resources_path}/js/app.js`, `${public_path}`);

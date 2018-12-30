const { compose } = require("react-app-rewired");
const rewireEslint = require("react-app-rewire-eslint");
const rewirePolyfills = require("react-app-rewire-polyfills");
const rewireSass = require("react-app-rewire-scss");

module.exports = compose(
  rewirePolyfills,
  rewireEslint,
  rewireSass
);

const requiredEnvVars = require("./envConfig");

// Check if the CI environment variable is set
if (!process.env.CI) {
  const validateEnvVariables = require("./envValidator");

  validateEnvVariables(requiredEnvVars);
}

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

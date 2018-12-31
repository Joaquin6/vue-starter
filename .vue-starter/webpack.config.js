module.exports = {
  /**
   * modify client webpack config
   * @param {webpack.Configuration} clientConfig
   * @see https://github.com/devCrossNet/vue-starter-packages/blob/master/packages/vue-starter-service/src/webpack/config/client.ts
   * @returns {webpack.Configuration}
   */
  clientConfig: (clientConfig) => {
    return clientConfig;
  },
  /**
   * modify client webpack config
   * @param {webpack.Configuration} devServerConfig
   * @see https://github.com/devCrossNet/vue-starter-packages/blob/master/packages/vue-starter-service/src/webpack/config/dev-server.ts
   * @returns {webpack.Configuration}
   */
  devServerConfig: (devServerConfig) => {
    return devServerConfig;
  },
  /**
   * modify client webpack config
   * @param {webpack.Configuration} isomorphicConfig
   * @see https://github.com/devCrossNet/vue-starter-packages/blob/master/packages/vue-starter-service/src/webpack/config/isomorphic.ts
   * @returns {webpack.Configuration}
   */
  isomorphicConfig: (isomorphicConfig) => {
    return isomorphicConfig;
  },
  /**
   * modify client webpack config
   * @param {webpack.Configuration} serverConfig
   * @see https://github.com/devCrossNet/vue-starter-packages/blob/master/packages/vue-starter-service/src/webpack/config/server.ts
   * @returns {webpack.Configuration}
   */
  serverConfig: (serverConfig) => {
    return serverConfig;
  },
  /**
   * modify client webpack config
   * @param {webpack.Configuration} spaConfig
   * @see https://github.com/devCrossNet/vue-starter-packages/blob/master/packages/vue-starter-service/src/webpack/config/spa.ts
   * @returns {webpack.Configuration}
   */
  spaConfig: (spaConfig) => {
    return spaConfig;
  },
};

'use strict';

/**
 * `auth` middleware.
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    // strapi.log.info('In auth middleware.');
    // console.log('ctx,strapi', ctx, strapi)

    await next();
  };
};

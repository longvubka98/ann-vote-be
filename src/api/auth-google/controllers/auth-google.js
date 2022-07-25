'use strict';

const { getUserProfile } = require("../../../utils/GoogleAPI");

/**
 * A set of functions called "actions" for `auth-google`
 */

module.exports = {
  async login(ctx, next) { // called by GET /hello 
    // const strapi = new Strapi()
    ctx.body = "abc"
    const { accessToken } = ctx.request.body
    const userInfo = getUserProfile(accessToken)
    const userDb = strapi.server("")
    // console.log(ctx.params)
    // console.log(ctx.query)

  },
};
const { default: axios } = require('axios');
const googleConfig = require("../../config/google");

exports.getUserProfile = async (accessToken) => {
    try {
        const path = `userinfo?alt=json&access_token=${accessToken}`
        const res = await axios.get(`${googleConfig.gg_api_url}/${path}`)
        console.log('res', res)
        // return JSON.parse(res)

    } catch (error) {
        console.log(error);
    }
}
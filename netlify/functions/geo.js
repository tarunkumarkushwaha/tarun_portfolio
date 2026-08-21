const axios = require("axios");

async function getGeo(ip) {
  try {
    const { data } = await axios.get(
      `https://ipwho.is/${ip}`
    );

    if (!data.success) return {};

    return {
      country: data.country,
      state: data.region,
      city: data.city,
      isp: data.connection?.isp,
    };
  } catch {
    return {};
  }
}

module.exports = getGeo;
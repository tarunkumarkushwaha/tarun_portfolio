const getGeo = require("./geo");

const { UAParser } = require("ua-parser-js");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    const ip =
      event.headers["x-nf-client-connection-ip"] ||
      event.headers["client-ip"] ||
      event.headers["x-forwarded-for"]?.split(",")[0] ||
      "";

    const geo = await getGeo(ip);

    const parser = new UAParser(body.userAgent);

    const ua = parser.getResult();

    console.log({
      ip,

      country: geo.country,

      state: geo.state,

      city: geo.city,

      isp: geo.isp,

      browser: ua.browser.name,

      browserVersion: ua.browser.version,

      os: ua.os.name,

      osVersion: ua.os.version,

      device: ua.device.type || "Desktop",

      page: body.page,

      screen: body.screen,

      language: body.language,

      timezone: body.timezone,

      referrer: body.referrer,

      userAgent: body.userAgent,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
      }),
    };
  }
};

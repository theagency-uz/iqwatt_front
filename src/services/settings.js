import { strapi } from './httpService';

async function getSettings({ lng = "ru" } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/setting", {
      params: {
        locale: lng,
        populate: ['logo', 'placeholder']
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

export {
  getSettings
};
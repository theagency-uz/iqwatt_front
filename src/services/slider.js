import { strapi } from './httpService';

async function getSlider({ lng = "ru" } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/slider", {
      params: {
        locale: lng,
        populate: {
          slide: {
            populate: ['image_desktop', 'image_mobile']
          }
        },
        sort: ['createdAt:desc']
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

export {
  getSlider
};
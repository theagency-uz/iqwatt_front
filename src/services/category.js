import { strapi } from './httpService';

async function getCategories({ lng = "ru" } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/categories", {
      params: {
        locale: lng,
        populate: ['image'],
        // sort: ['createdAt:desc'],
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}
async function getCategory({ lng = "ru", slug } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/categories", {
      params: {
        locale: lng,
        populate: ['image'],
        // sort: ['createdAt:desc'],
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

export {
  getCategories,
  getCategory
};
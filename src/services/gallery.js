import { strapi } from './httpService';

async function getGallery({ lng = "ru", limit = 10, page = 1 } = { lng: "ru", limit: 10, page: 1 }) {
  try {
    const result = await strapi.get("/galleries", {
      params: {
        locale: lng,
        populate: ['image'],
        pagination: {
          page: page,
          pageSize: limit
        }
        // sort: ['createdAt:desc'],
      }
    });
    return result.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}


export {
  getGallery
};
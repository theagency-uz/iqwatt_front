import { strapi } from './httpService';

async function getPortfolios({ lng = "ru", limit = 10, page = 1 } = { lng: "ru", limit: 10, page: 1 }) {
  try {
    const result = await strapi.get("/portfolios", {
      params: {
        locale: lng,
        populate: ['video', 'poster'],
        pagination: {
          page: page,
          pageSize: limit
        }
        // sort: ['createdAt:desc'],
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

export {
  getPortfolios,
};
import { strapi } from './httpService';

async function getProducts({ lng = "ru", category } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/products", {
      params: {
        locale: lng,
        populate: {
          preview_image: true,
          // slide: {
          //   populate: ['preview_image']
          // }
        },
        // sort: ['createdAt:desc'],
        filters: {
          category: {
            id: category
          }
        }
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

export {
  getProducts
};
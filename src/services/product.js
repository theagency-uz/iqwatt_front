import { strapi } from './httpService';

async function getProducts({ lng = "ru", category } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/products", {
      params: {
        locale: lng,
        populate: {
          preview_image: true,
          category: true,
          subcategory: true,
          subcategory_2: true,
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

async function getProductBySlug({ lng = "ru", slug } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/products/slug/" + slug, {
      params: {
        locale: lng,
        populate: {
          instruction: true,
          images: true,
          preview_image: true,
          category: true,
          subcategory: true,
          subcategory_2: true,
          variation: {
            populate: { characteristics: true, images: true }
          },
          characteristics: true
          // slide: {
          //   populate: ['preview_image']
          // }
        },
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

export {
  getProducts,
  getProductBySlug
};
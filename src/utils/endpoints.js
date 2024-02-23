const strapiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.0.204:1337/api";
const strapiImageUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "http://192.168.0.204:1337";

// const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://api.yapondokon.uz/api";
// const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "https://api.yapondokon.uz";
const yandexMapsApiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || "";


export { strapiImageUrl, strapiUrl, yandexMapsApiKey };

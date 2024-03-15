const shimmerFunc = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${w}" height="${h}" fill="#f8f8f8" />
  <animate id="animation1"
             attributeName="opacity"
             from="0.4" to="1" dur="1.5s"
             begin="0s;animation2.end" />
    <animate id="animation2"
             attributeName="opacity"
             from="1" to="0.4" dur="1.5s" 
             begin="animation1.end" />
</svg>`;
const toBase64 = (str) =>
    typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
const skeleton = `data:image/svg+xml;base64,${toBase64(shimmerFunc(10000, 10000))}`;
export default skeleton;

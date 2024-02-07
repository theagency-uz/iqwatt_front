import React from "react";
import PageWrapper from "./pageWrapper";

function ProductSlug({ params: { lng }, ...props }) {
  return <PageWrapper lng={lng} />;
}

export default ProductSlug;

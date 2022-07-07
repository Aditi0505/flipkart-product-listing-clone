export const getProductsByBrand = (filterState, products) => {
  return products.filter((product) =>
    Object.values(filterState.brands).some((filterValue) => filterValue)
      ? product.brand
        ? filterState.brands[product.brand]
        : product
      : product
  );
};
export const getProductsBySize = (filterState, products) => {
  return products.filter((product) =>
    Object.values(filterState.sizes).some((sizeValue) => sizeValue)
      ? product.size.some((size) => filterState.sizes[size])
      : product
  );
};

export const getProductsIdealFor = (filterState, products) => {
  return products.filter((product) =>
    Object.values(filterState.idealFor).some((ideal) => ideal)
      ? product.ideal
        ? filterState.idealFor[product.ideal]
        : product
      : product
  );
};

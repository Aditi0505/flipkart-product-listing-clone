export const getSortedProducts = (filterState, productList) => {
  if (filterState.sortBy === "LOW_TO_HIGH") {
    return [...productList].sort((a, b) => a["price"] - b["price"]);
  } else if (filterState.sortBy === "HIGH_TO_LOW") {
    return [...productList].sort((a, b) => b["price"] - a["price"]);
  } else {
    return [...productList];
  }
};

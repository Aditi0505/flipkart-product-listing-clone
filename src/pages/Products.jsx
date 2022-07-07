import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from "../components/Card/ProductCard";
import { Filter } from "../components/Filter/Filter";
import { RadioButton } from "../components/Input/RadioButton";
import { useFilter } from "../context/filter-context";
import myProducts from "../data/products.json";
import {
  getProductsByBrand,
  getProductsBySize,
  getProductsIdealFor,
} from "../utils/getCheckedProducts";
import { getSortedProducts } from "../utils/getSortedProducts";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = JSON.parse(JSON.stringify(myProducts));
    setProducts(data);
  }, []);
  const { filterState, filterDispatch } = useFilter();
  const brandedProductsList = getProductsByBrand(filterState, products);
  const sizeProductsList = getProductsBySize(filterState, brandedProductsList);
  const idealProductsList = getProductsIdealFor(filterState, sizeProductsList);
  const sortedProductList = getSortedProducts(filterState, idealProductsList);
  return (
    <div className="flex">
      <div className="w-1/6 flex font-bold justify-start p-2 font-Montserrat">
        <div className="flex flex-col">
          <div className="flex gap-4">
            Filters
            <button
              onClick={() =>
                filterDispatch({
                  type: "CLEAR",
                  payload: "",
                })
              }
            >
              Clear all
            </button>
          </div>
          <Filter />
        </div>
      </div>
      <div className="w-5/6 flex flex-col justify-start">
        <div className="font-bold font-Montserrat">
          Clothing and Accessories -
          <small className="font-normal text-slate-500 font-Quattrocento">
            {`( Showing ${sortedProductList.length} of 6 products)`}
          </small>
        </div>
        <div className="flex gap-12 font-bold font-Montserrat">
          Sort By:
          <RadioButton
            label="Price-- High to Low"
            name="sortBy"
            type="SORT"
            payload="HIGH_TO_LOW"
          />
          <RadioButton
            label="Price-- Low to High"
            name="sortBy"
            type="SORT"
            payload="LOW_TO_HIGH"
          />
        </div>
        <div className="flex gap-12 p-4 flex-wrap justify-start">
          {sortedProductList.length > 0 ? (
            sortedProductList.map((product) => (
              <ProductCard productDetails={product} key={product.id} />
            ))
          ) : (
            <p className="flex justify-center items-center text-bold font-Quattrocento">
              No product found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export { Products };

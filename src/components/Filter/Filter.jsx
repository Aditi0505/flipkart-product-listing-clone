import { Checkbox } from "../Input/Checkbox";

const Filter = () => {
  const ideal = ["Men", "Women"];
  const size = ["S", "M", "L", "XL"];
  const brands = ["Bewakoof", "Dressberry", "Libas"];
  return (
    <div>
      <ul className="flex flex-col gap-4">
        Ideal For:
        <li className="flex flex-col gap-4 font-Quattrocento">
          {ideal.map((idealFor, i) => (
            <Checkbox
              label={idealFor}
              id={idealFor}
              name={idealFor}
              key={i}
              type="SET_IDEAL"
              payload={idealFor}
              filter={idealFor}
            />
          ))}
        </li>
        Size:
        <li className="flex flex-col gap-4 font-Quattrocento">
          {size.map((sizeFor, i) => (
            <Checkbox
              label={sizeFor}
              id={sizeFor}
              name={sizeFor}
              key={i}
              type="SET_SIZE"
              payload={sizeFor}
              filter={sizeFor}
            />
          ))}
        </li>
        Brands:
        <li className="flex flex-col gap-4 font-Quattrocento">
          {brands.map((brand, i) => (
            <Checkbox
              label={brand}
              id={brand}
              name={brand}
              key={i}
              type="SET_BRAND"
              payload={brand}
              filter={brand}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export { Filter };

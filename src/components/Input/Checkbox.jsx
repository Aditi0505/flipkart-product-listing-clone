import { useFilter } from "../../context/filter-context";

const Checkbox = ({ name, label, id, type, payload, filter }) => {
  const { filterState, filterDispatch } = useFilter();
  const { idealFor, brands, sizes } = filterState;
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={idealFor[filter] || sizes[filter] || brands[filter]}
      />
      <label htmlFor={label} className="font-normal cursor-pointer">
        {label}
      </label>
    </div>
  );
};
export { Checkbox };

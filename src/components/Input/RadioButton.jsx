import { useFilter } from "../../context/filter-context";

const RadioButton = ({ label, name, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={label}
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={filterState.sortBy === payload}
        className="invisible"
      />
      <label htmlFor={label} className="font-normal cursor-pointer">
        {label}
      </label>
    </div>
  );
};
export { RadioButton };

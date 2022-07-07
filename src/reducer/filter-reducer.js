export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "SET_BRAND":
      return {
        ...state,
        brands: {
          ...state.brands,
          [payload]: !state.brands[payload],
        },
      };
    case "SET_SIZE":
      return {
        ...state,
        sizes: {
          ...state.sizes,
          [payload]: !state.sizes[payload],
        },
      };
    case "SET_IDEAL":
      return {
        ...state,
        idealFor: {
          ...state.idealFor,
          [payload]: !state.idealFor[payload],
        },
      };
    case "CLEAR":
      return {
        ...state,
        sortBy: null,
        sizes: { S: false, M: false, L: false, XL: false },
        idealFor: { Men: false, Women: false },
        brands: { Dressberry: false, Bewakoof: false, Libas: false },
      };
    default:
      return state;
  }
};

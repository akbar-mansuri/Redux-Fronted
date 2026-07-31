

const initialState = {
  products: [],
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "success":
      return {
      
        products: action.payload,
      };

    case "fail":
      return {
      
        products: [],
      };

    default:
      return state;
  }
};

export default Reducers;
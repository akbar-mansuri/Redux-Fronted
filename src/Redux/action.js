import axios from "axios";

const action = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/products");

    dispatch({
      type: "success",
      payload: response.data.product
    });
  } catch (err) {
    dispatch({
      type: "fail",
      payload: err.message,
    });
  }
};

export default action;
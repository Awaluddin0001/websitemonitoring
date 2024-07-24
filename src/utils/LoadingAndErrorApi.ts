export const setLoadingAndError = (dispatch: (dispatch: any) => void) => {
  dispatch({
    type: "SET_LOADING_AND_ERROR",
    payload: {
      isLoading: true,
      isError: null,
    },
  });
};

export const handleResponse = (
  response: any,
  dispatch: (dispatch: any) => void
) => {
  dispatch({ type: "SET_IS_LOADING", payload: false });
  return response.data;
};

export const handleError = (error: any, dispatch: (dispatch: any) => void) => {
  dispatch({
    type: "SET_LOADING_AND_ERROR",
    payload: {
      isLoading: false,
      isError: error.message,
    },
  });
  throw error;
};

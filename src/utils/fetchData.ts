export const fetchFloor = async (getFloors: any, dispatch: any) => {
  try {
    const data = await getFloors();
    const selectOptions = data.data.map((item: any) => ({
      value: item.id,
      label: item.name,
    }));
    dispatch({ type: "LIST_FLOORS", payload: selectOptions });
  } catch (err) {
    dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch floors" });
  }
};
export const fetchRoom = async (getRooms: any, dispatch: any) => {
  try {
    const data = await getRooms();
    const selectOptions = data.data.map((item: any) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    const filterRooms = selectOptions.filter(
      (item: any) => item.value.slice(2, 3) === "1"
    );
    dispatch({
      type: "FETCH_ROOMS",
      payload: {
        listRooms: filterRooms,
        listAllRooms: selectOptions,
      },
    });
  } catch (err) {
    dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch rooms" });
  }
};
export const fetchBrand = async (getBrandElectrical: any, dispatch: any) => {
  try {
    const data = await getBrandElectrical("1", dispatch, null, "no");
    const selectOptions = data.data.map((item: any) => ({
      value: item.id,
      label: item.name,
    }));
    dispatch({ type: "LIST_BRAND", payload: selectOptions });
  } catch (err) {
    dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch brands" });
  }
};
export const fetchVendor = async (getVendorElectrical: any, dispatch: any) => {
  try {
    const data = await getVendorElectrical("1", dispatch, null, "no");
    const selectOptions = data.data.map((item: any) => ({
      value: item.id,
      label: item.company,
    }));
    dispatch({ type: "LIST_VENDOR", payload: selectOptions });
  } catch (err) {
    dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch vendors" });
  }
};
export const fetchMaintenance = async (
  getMaintenanceElectrical: any,
  dispatch: any
) => {
  try {
    const data = await getMaintenanceElectrical("1", dispatch, null, "no");
    const selectOptions = data.data.map((item: any) => ({
      value: item.id,
      label: item.activity,
    }));
    dispatch({ type: "LIST_MAINTENANCE", payload: selectOptions });
  } catch (err) {
    dispatch({
      type: "SET_IS_ERROR",
      payload: "Failed to fetch maintenance",
    });
  }
};
export const fetchLink = async (getLink: any, dispatch: any) => {
  try {
    const data = await getLink(dispatch);
    const selectOptions = data.data.map((item: any) => ({
      value: item.id,
      label: item.id,
    }));
    dispatch({ type: "LIST_LINK", payload: selectOptions });
  } catch (err) {
    dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch links" });
  }
};
export const fetchType = async (getType: any, dispatch: any) => {
  try {
    const data = await getType("1", dispatch, null, "no");
    const selectOptions = data.data.map((item: any) => ({
      value: item.id,
      label: item.name,
    }));
    dispatch({ type: "LIST_TYPES", payload: selectOptions });
  } catch (err) {
    dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch links" });
  }
};

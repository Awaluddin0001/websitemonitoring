import { createSlice, configureStore } from "@reduxjs/toolkit";

const navbarInitialState = {
  showNavbar: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState: navbarInitialState,
  reducers: {
    setShowNavbar: (state) => {
      state.showNavbar = !state.showNavbar;
    },
  },
});

const store = configureStore({
  reducer: { navbar: navbarSlice.reducer },
});

export const navbarAction = navbarSlice.actions;

export default store;

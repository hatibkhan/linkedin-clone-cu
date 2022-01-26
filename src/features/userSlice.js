import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

const initialState = {
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;
// selectors help us pulling in the info(used in app.js ) with the help of useSelector hook

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

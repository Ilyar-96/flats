import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { offerSlice } from "./offers/offer";
import { userSlice } from "./user/user";

export const rootReducer = combineReducers({
	[NameSpace.USER]: userSlice.reducer,
	[NameSpace.OFFER]: offerSlice.reducer,
});

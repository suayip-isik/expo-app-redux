import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

const initialState: IUser = {
  name: "",
  surName: "",
  age: "",
  eMail: "",
  userName: "",
  password: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.surName = action.payload.surName;
      state.age = action.payload.age;
      state.eMail = action.payload.eMail;
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
    deleteUser: (state) => {
      state.name = "";
      state.surName = "";
      (state.age = ""), (state.eMail = "");
      state.userName = "";
      state.password = "";
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;

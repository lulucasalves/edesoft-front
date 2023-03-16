import { createSlice } from "@reduxjs/toolkit";

import { IOrderBy, IUserData, IUserStore } from "types";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: 1,
        firstName: "",
        lastName: "",
        email: "",
      },
    ],
    sortBy: "popular",
  },
  reducers: {
    createUser: (state: IUserStore, action) => {
      state.users.push(action.payload);
    },
    setAllUsers: (state: IUserStore, action) => {
      state.users = action.payload;
    },
    changeOrder: (state: IOrderBy, action) => {
      state.sortBy = action.payload;
    },
    editUser: (state: IUserStore, action) => {
      let nullArray = [] as Array<IUserData>;
      const payl = action.payload;

      state.users.map((val: IUserData) => {
        if (val.id === payl.id) {
          val = { ...payl };
        }
        nullArray.push(val);
        return null;
      });
      console.log(nullArray);
      state.users = nullArray;
    },
    excludeUser: (state: IUserStore, action) => {
      let nullArray = [] as Array<IUserData>;
      const payl = action.payload;

      state.users.map((val: IUserData) => {
        if (val.id !== payl) {
          nullArray.push(val);
        }

        return null;
      });

      state.users = nullArray;
    },
  },
});

export const { createUser, excludeUser, editUser, changeOrder, setAllUsers } =
  userSlice.actions;
export const userReducer = userSlice.reducer;

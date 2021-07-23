import { type } from "os";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    case type.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

const { GET_WALLET_DETAILS, DISCONNECT_USER_WALLET } = require("./actions");

const initialState = {
  isActive: false,
  account: "",
  error: "",
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLET_DETAILS:
      return {
        ...state,
        account: action.payload.account,
        isActive: action.payload.active,
      };
    case DISCONNECT_USER_WALLET:
      return initialState;
    default:
      return state;
  }
};

export default accountReducer;

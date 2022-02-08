const { GET_WALLET_DETAILS, DISCONNECT_USER_WALLET } = require("./actions");

export const getAccountDetails = (account) => {
  return {
    type: GET_WALLET_DETAILS,
    payload: account,
  };
};

export const disconnectUserWallet = () => {
  return {
    type: DISCONNECT_USER_WALLET,
  };
};

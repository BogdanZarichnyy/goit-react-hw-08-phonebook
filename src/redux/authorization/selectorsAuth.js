export const selectUserName = state => state.authorization.userInfo.name;
export const selectUserEmail = state => state.authorization.userInfo.email;
export const selectIsLoggedIn = state => state.authorization.isAuthentication;
export const selectUserToken = state => state.authorization.userToken;
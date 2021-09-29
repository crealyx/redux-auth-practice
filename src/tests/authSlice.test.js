import authSlice, {
  initialState,
  authActions,
  selectToken,
  selectIsLoggedIn,
} from '../store/authSlice';

describe('reducer, actions and selectors', () => {
  it('should return the initial state', () => {
    const nextState = initialState;
    const result = authSlice.reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly set the state when sign in is made', () => {
    const data = 'token';

    const nextState = authSlice.reducer(
      initialState,
      authActions.logInUser(data)
    );

    const rootState = { auth: nextState };
    expect(selectIsLoggedIn(rootState)).toEqual(true);
    expect(selectToken(rootState)).toEqual(data);
  });
});

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions(
  {
    checkConfiguration: null,
    logout: null,
    reset: null,
  },
  {
    prefix: 'Account/'
  }
);

export const AccountTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  errors: null,
  configuration: {},
});

/* ------------- Reducers ------------- */

export const checkConfiguration = state => state.merge({ loading: true });

export const logout = () => {};

export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_CONFIGURATION]: checkConfiguration,
  [Types.LOGOUT]: logout,
  [Types.RESET]: reset,
});

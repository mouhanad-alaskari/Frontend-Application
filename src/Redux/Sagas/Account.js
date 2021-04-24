import { put } from 'redux-saga/effects';
import AccountActions from '../Actions/Account';

const AccountSaga = {
  *checkStatus() {
    
  },
  *logout() {
    yield put(AccountActions.reset());
  }
};

export default AccountSaga;

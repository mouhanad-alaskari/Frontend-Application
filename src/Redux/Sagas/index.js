import { takeEvery, takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from '../Actions/Startup';
import { AccountTypes } from '../Actions/Account';

/* ------------- Sagas ------------- */

import startupSagas from './Startup';
import accountSagas from './Account';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startupSagas.startup),

    takeLatest(AccountTypes.CHECK_CONFIGURATION, accountSagas.checkStatus),
  ]);
}

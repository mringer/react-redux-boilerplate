import { all } from 'redux-saga/effects'
import { exampleSaga } from './exampleSaga';
import { formSaga } from './formSaga';


export default function* sagas() {
  yield all([
    ...exampleSaga,
    ...formSaga
  ]);
}

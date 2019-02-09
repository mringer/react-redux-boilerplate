import { all } from 'redux-saga/effects'
import { exampleSaga } from './exampleSaga';
import { buyFlowSaga } from './buyFlowSaga';


export default function* sagas() {
  yield all([
    ...exampleSaga,
    ...buyFlowSaga
  ]);
}

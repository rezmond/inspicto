import { sessionModel } from '@/features/session';
import { all } from '@/shared/lib/reduxSaga';

export function* rootSaga() {
  yield all([sessionModel.saga()]);
}

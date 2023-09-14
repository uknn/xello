import * as selector from './tasks.selectors';
import {State} from '../reducers/task.reducers';

describe('My Selectors', () => {
  it('should calc selectTotal', () => {
    const state: State = {
      tasks: null,
      loading: true,
      error: null
    }
    expect(selector.loading.projector(state)).toBe(true);
  });
});

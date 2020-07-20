import axios from '../utils/axios';
export interface IindexState {
  name: string;
  count: number;
  init: boolean;
}
const model = {
  namespace: 'index',
  state: {
    name: 'i am index',
    count: 0,
    init: false,
  },
  reducers: {
    caculate(state: IindexState, payload) {
      const { count } = state;
      const { delta } = payload;
      return { ...state, count: count + delta };
    },
    changeName(state: IindexState, payload) {
      return { ...state, name: payload.name };
    }
  },
  effects: {
    *init(action, { put }) {
      yield put({ type: 'caculate', delta: 1 });
    },
    *asyncGetData(action, { put }) {
      const result = yield axios.get('/api/getString');
      yield put({ type: 'changeName', name: result.data.str })
    }
  },
};

export default model;


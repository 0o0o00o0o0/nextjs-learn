interface Iuser {
    name: string;
}
const model = {
    namespace: 'user',
    state: {
        name: 'hopperhuang',
    },
    reducers: {
        changeName(state: Iuser, payload) {
            return { ...state, name: payload.name }
        },
    },
    effects: {
        *change(action, { put }) {
            // yield delay(2000);

            yield put({ type: 'changeName', name: Math.random().toString(32).slice(2) });
        },
    },
};

export default model;

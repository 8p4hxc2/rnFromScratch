// action types
export const types = {
    LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_ERROR: 'auth/LOGIN_ERROR'
}

// action creators
export const actions = {
    loginRequest: (email, password) => ({ type: types.LOGIN_REQUEST, email, password })
};

// initial state
const initialState = {
    user: 'change me'
};

// reducers
export default (state = initialState, actions) => {
    switch (actions.type) {
        case types.LOGIN_SUCCESS:
            return { ...state, user: actions.user + Math.random() };

        case types.LOGIN_ERROR:
            return state;
    }
    return state;
};
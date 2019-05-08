

export const createStore = (reducer, initialstate) => {
    let state = initialstate;
    let callbacks = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        callbacks.forEach(callback => callback())
    };

    const subscribe = callback => {
        callbacks.push(callback);
        return () => callbacks.filter(cb => cb !== callback)
    }
    
    return { getState, dispatch, subscribe };
}
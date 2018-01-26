export default (state = null, action) => {
    switch (action.type) {
        case 'test':
            return action.payload;
        default:
            return state;
    }
};
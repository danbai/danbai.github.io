export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
        case 'ADD2':
        case 'DEL':
        case 'TXT':
            return Object.assign({}, state, {count: action.data});
        default:
            return {
                count: 0,
                txt: 'a'
            };
    }
}
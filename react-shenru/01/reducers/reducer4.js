export default (state = {}, action) => {
    switch (action.type) {  // state即返回的新状态,新的state即本次的返回值,所以每次都是往空的对象里,先推state,再新增属性或改变原来属性的值
        case 'ADD':
            return Object.assign({}, state, {count: action.data});
        case 'ADD2':
            return Object.assign({}, state, {count: action.data});
        case 'ADD3':
            return Object.assign({}, state, {count: action.data});  
        case 'DEL':
            return Object.assign({}, state, {count: action.data});
        case 'AJAX':
            return Object.assign({}, state, {res: action.data.res});
        default:
            return {
                count: 0,
                res: 'aaaa'
            };
    }
}
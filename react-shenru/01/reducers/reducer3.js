export default (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, {
				count: state + 1,
				type: 'count'
			});
		case 'DECREMENT':
			return Object.assign({}, state, {
				count: state - 1,
				type: 'count'
			});
		case 'getSource':
			return Object.assign({}, state, {
				source: action.dada,
				type: 'source'
			});
		case 'ajax':
			return Object.assign({}, state, {
				ajaxSource: action.data,
				type: 'ajaxSource'
			})
		case 'ajaxError':
			return Object.assign({}, state, {
				ajaxSource: action.data,
				type: 'ajaxSource'
			});
		default:
			return state
	}
}
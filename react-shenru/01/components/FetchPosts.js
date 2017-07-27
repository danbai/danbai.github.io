export function fetchFriends() {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_FRIENDS'
		});

		return fetch('../api/response.json')
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: 'RECEIVE_FRIENDS',
					data: json
				});
			})
	}
}
export function addAction(data) {
    return {
        type: 'ADD',
        data: data
    }
}

export function delAction(data) {
    return {
        type: 'DEL',
        data: data
    }
}

export function txtAction(data) {
    return {
        type: 'TXT',
        data: data
    };
}

export function dispatchAction(data) {
    return (dispatch) => {
        dispatch({
            type: 'ADD2',
            data: data
        });
    }
}


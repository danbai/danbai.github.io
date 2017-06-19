function Button3({ color='blue', text='Confirm' }) {
    return (
        <button className={ 'btn btn-${color}' }>
            <em>{ text }</em>
        </button>
    );
}
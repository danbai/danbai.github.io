import React from 'react';

function List({ items, onDelete }) {
    let itemList = items.map((item) => {
        return (
            <li key={ item.id }>
                <button onClick={ () => { onDelete(item.id) } }></button>
                { item.content }
            </li>
        );
    });

    return (
        <ul>
            <h2>这是今天的待办事项</h2>
            { itemList }
        </ul>
    );
}

export default List;
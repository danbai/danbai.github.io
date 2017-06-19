import React from 'react';

function Goods(props) {
    return (
        <ul>
            {
                props.selectedGoods.map((item, index) => {
                    return (
                        <li key={ index }>{ props.goods[item].name }</li>
                    )
                })
            }
        </ul>
    );
}

export default Goods;
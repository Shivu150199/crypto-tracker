import React from 'react';

const TableRow = ({ item }) => {
    const { id, name, symbol, image, current_price, total_volume } = item;

    return (
        <tr>
            <td><img src={image} alt={name} width="30" height="30" /></td>
            <td className='namess'>{name}</td>
            <td>{symbol}</td>
            <td>{id}</td>
            <td>${current_price}</td>
            <td>Mkt Cap: ${total_volume}</td>
        </tr>
    );
};

export default TableRow;

import React from 'react'

export default function ProductRow(props) {
    // eslint-disable-next-line no-unused-vars
    const { product } = props;
    // eslint-disable-next-line no-unused-vars
    const name = product.stocked ? product.name : <span style={{ color: 'red'}}>{product.name}</span>;
  return (
    <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
  )
}

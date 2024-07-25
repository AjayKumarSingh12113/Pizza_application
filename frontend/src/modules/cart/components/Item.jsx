import React from 'react'

export const Item = ({item}) => {
  return (
    <p>{item.name} {item.price}</p>
  )
}

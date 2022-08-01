import React from 'react'

export default function SearchBar() {
  return (
    <form>
       <input type="text" placeholder="search..."/>
       <p>
          <input type="checkbox"/>
          {''}
          Only show products in stock
       </p>
    </form>
  )
}

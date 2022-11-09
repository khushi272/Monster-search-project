import React from 'react'
import './search-box.style.css';

const SearchBox =({className,placeholder,OnchangeHandler})=> {
        return (
            <input className={className} placeholder={placeholder} type='search' onChange={OnchangeHandler} />

        )
}

export default SearchBox;
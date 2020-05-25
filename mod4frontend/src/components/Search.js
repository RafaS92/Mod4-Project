import React from 'react'
// import Select from 'react-select'

export const Search = (props) => {


    return (
        <div>
            
            <label>Search</label>
            {/* <input onChange={props.SearchItem} /> */}
        <input name="search" onChange={(e)=>props.searchItem(e)}/>
        {/* <button value="search" onClick={props.getItems}/> */}
        </div>
    )
}
import React from 'react'
import "../css/Search.css"



export const Search = () => {
    return (
        <div className="contsearch">
            <div className="sediv">
                <input className='searchbox' type="text" placeholder="🔍  Search" name="search"></input>
            </div>
            <div className="extdiv">
                <button className='secbut' > Report</button>
                <p>⧩All</p>
                <p> 200 Users</p>
                <p>Urgent</p>
                <p>01/01/20-02/01/20</p>
                <p className='fg'>Filter</p>
            </div>
        </div>

    )
}
export default Search;
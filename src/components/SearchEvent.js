import React from 'react'
const SearchEvent = (onHandleSearch) => {


    return (
        <div className="pr-0 d-inline float-right">
           <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /*onChange={onHandleSearch} */ />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" /*onClick={onHandleSearch}*/ >Search</button>
    </form>
        </div>
    )
}
export default SearchEvent

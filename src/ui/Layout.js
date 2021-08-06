import React from 'react'

const Layout = (props) => {
    return (
        <div className="container-fluid p-2">
                {props.children}
            
        </div>
    )
}

export default Layout

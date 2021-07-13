
import Backdrop from './Dialog/Backdrop';
import SignOut from './Dialog/SignOut'
import { useState } from 'react';

import Style from './Header.module.css';
import { Link } from 'react-router-dom'

const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
      setModalIsOpen(true);
    }
  
    function closeModalHandler() {
      setModalIsOpen(false);
    }    return (
        <nav className="navbar navbar-expand-lg navbar-collapse-md navbar-light bg-info justify-content-center sticky-top" id={Style.navbar}>
                <div className="container">

            <Link className="navbar-brand " to="/dashboard"><span className={Style.logo}>EventKeeper</span></Link>


            {/* //responsivity: toggle btn */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item light">
                    <Link className="nav-link" to='/all-events'>All Events <span className="sr-only">(current)</span></Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to='/today-events'>Today's Events</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to='/add-new-event'>Add New Event</Link>
                </li><li className="nav-item ">
                    <Link className="nav-link" to='/saved-events'>Saved Events</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/accomplished-events'>Accompanished Events</Link>
                </li>
               
                
                <div className="dropdown-divider"></div>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account</Link>
                    <div className="dropdown-menu">
                    <Link className="dropdown-item"  to='/sign-in'>Sign In</Link>
                    <Link className="dropdown-item"  to='/sign-up' >Sign Up</Link>
                    <div className="dropdown-divider"></div>
                    <Link  to='/sign-out' className="dropdown-item" >Log out</Link>
                    </div>
                </li>
                  
            

        </ul>
                        {/* <button className="dropdown-item" onClick={deleteHandler} >Log out</button> */}

        </div>
        {modalIsOpen && <SignOut onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      }
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
</div>
        </nav>
        
    )
}


export default Header

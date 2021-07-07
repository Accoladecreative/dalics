
import Backdrop from './Backdrop';
import SignOut from '../account/SignOut'
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
        <nav className="navbar navbar-expand-lg navbar-light bg-info justify-content-center" id={Style.navbar}>
                <div className="container">

            <Link className="navbar-brand " to="/all-events"><span className={Style.logo}>EventKeeper</span></Link>

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
               
                <ul className="nav  justify-content-end ">
               
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account</Link>
                    <div className="dropdown-menu">
                    <Link className="dropdown-item"  to='/sign-in'>Sign In</Link>
                    <Link className="dropdown-item"  to='/sign-up' >Sign Up</Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={deleteHandler} >Log out</button>
                    </div>
                </li>
            </ul>

        </ul>
        {modalIsOpen && (
        <SignOut onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
</div>
        </nav>
        
    )
}


export default Header

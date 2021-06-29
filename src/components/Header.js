import style from './Header.module.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info" id={style.navbar}>
            <Link className="navbar-brand" href="#">EventKeeper</Link>
            
            <ul className="navbar-nav mr-auto">
                <li className="nav-item light">
                    <Link className="nav-link" to='/all-events'>All Events <span class="sr-only">(current)</span></Link>
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
            </ul>
            
        </nav>
    )
}

export default Header

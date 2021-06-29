import classes from './Header.module.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className={classes.topNav}>
            <ul className={classes.topNav}>
                <li>
                   <Link to='\'>Home</Link>
                </li> 
                
                <li>
                   <Link to='\'>Home</Link>
                </li> <li>
                   <Link to='\'>Home</Link>
                </li> <li>
                   <Link to='\'>Home</Link>
                </li> <li>
                   <Link to='\'>Home</Link>
                </li> <li>
                   <Link to='\'>Home</Link>
                </li> <li>
                   <Link to='\'>Home</Link>
                </li> 
            </ul>
            
        </div>
    )
}

export default Header

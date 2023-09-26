import {Link} from 'react-router-dom';
import style from './Navigation.module.css';

function Navigation () {

 return (
    <div className={style.navcontainer}> 
        <h1> <Link className={style.logo} to='/'>A<span className={style.pan}>i</span>D Meets</Link> </h1>

        
        <ul className={style.nav}>
            <li> <Link className={style.addmeeting} to='/'>Home</Link> </li>
            <li> <Link className={style.addmeeting} to='/add' >Add Meetings</Link> </li>
        
        </ul>
        

    </div>
    
 )   
}

export default Navigation;      
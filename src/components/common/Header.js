import React from 'react';
import {Link,IndexLink} from 'react-router';

 const Header=()=>{
    return(
            <nav >
                <IndexLink to='/' activeClassName='active'>Home</IndexLink>
                {" | "}
                <Link to='/about' activeClassName='active'>About</Link>
                {" | "}
                <Link to='/coins' activeClassName='active'>Coins</Link>
                {" | "}
                <Link to='/exchanges' activeClassName='active'>Exchanges</Link>
               
                
            </nav>
        
    );

 };
export default Header;
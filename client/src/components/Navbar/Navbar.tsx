/** Utils & Hooks*/
import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

/** Assets */

import logo from '../../assets/images/Logo_ML.png'
import searchIcon from '../../assets/images/ic_Search.png'
import './Navbar.scss';

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {

    const searchQuery = useRef<any>();
    const history = useHistory();
    
   
 
    const handleClick = () => {
        const query = searchQuery.current.value;
        history.push(`/items?search=${query}`)
    }

    const handleInputKeyPress = (e: any) => {
        if(e.charCode === 13) {
            handleClick();
        }
    }


    return ( 
        <nav className="navbar">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo Mercado Libre"/>
            </Link>
            <div className="searchForm" >
                <input className="searchBox" type="text" ref={searchQuery} placeholder="Nunca dejes de buscar" onKeyPress={(event) => handleInputKeyPress(event)} aria-label="Búsqueda"  />
                <div className="searchIconContainer" onClick={handleClick}>
                    <img className="searchIcon" src={searchIcon} alt="Icono de búsqueda"/>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
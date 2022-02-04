import {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategories } from '../../../actions/categories';

import './style.scss';

const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCategories());
    }, []);

    return (
    <div className="header__middle">
        <div id="navbar-container">
            <div className="row">
                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Accueil </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>


                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Concept`}> Concept </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Catégories <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                        <li>
                              <NavLink onClick={toggleClass} activeClassName='is-active' to={`/categories/o-clock`}> O'Clock
                              </NavLink>
                            </li>
                            <li>
                              <NavLink onClick={toggleClass} activeClassName='is-active' to={`/categories/geek`}> Geek
                              </NavLink>
                            </li>
                            <li>
                              <NavLink onClick={toggleClass} activeClassName='is-active' to={`/categories/css-puns`}> CSS Puns
                              </NavLink>
                            </li>
                            <li>
                              <NavLink onClick={toggleClass} activeClassName='is-active' to={`/categories/blague-de-dev`}> Blague de Dev
                              </NavLink>
                            </li>
                        </ul>
                    </li>

                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </div>
    )
}

export default Navbarmenu;

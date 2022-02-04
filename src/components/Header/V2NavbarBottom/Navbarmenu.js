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

    const categories = useSelector((state) => state.categories.list);
    
    const handleClick = ((event) => {
      const slug = event.target.getAttribute('value');
      console.log(slug);
      const base = '/categories/';
      const urlToRedirect = base + slug;
      navigate(urlToRedirect);
      dispatch(saveSlug(slug));
      dispatch(fetchProductsByCategory());
    });
    


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


                    <li 
                      className="menu-item " 
                    >
                      <NavLink onClick={toggleClass} activeClassName='is-active' to={`/Concept`}> Concept
                    </NavLink>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Catégories <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                
                          {categories.map(({ name, slug }) => (
                            <li>
                              <NavLink onClick={toggleClass, handleClick} activeClassName='is-active' to={`/categories/${slug}`}> {name}
                              </NavLink>
                            </li>
                          ))}
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

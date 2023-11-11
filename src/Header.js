// rfce

import React, { useEffect, useState } from 'react'
import ytLogo from './images/yt-logo.png'
import searchIcon from './images/search.png'
import avtar from './images/avtar.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSolidMicrophone, BiLogOut} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Header() {
    const [isUserLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isUserLoggedIn') == 'true'){
            setIsLoggedIn(true);
        }
    }, [])

    const handleLogout = () => {
        localStorage.setItem('isUserLoggedIn', false);
        localStorage.removeItem('email');

        setIsLoggedIn(false);
    }
  return (
    <div class="head-container">
      <div class="header">
                <div class="header-items header-logo">
                    <div class="header-first">
                        <GiHamburgerMenu />
                    </div>
                    <div class="header-second">
                        <Link to='/'>
                        <img id='yt-logo' src={ytLogo}/>
                        </Link>
                    </div>
                </div>
                <div class="header-items header-center">
                    {/* <div class="header-search"></div> */}
                    <input class="header-search" placeholder='Search..'/>
                    <button class="search-button">
                        <BsSearch style={{fontSize: '18px'}}/>
                        {/* <img class="small-image" src={searchIcon}></img> */}
                    </button>
                    <div class="header-mic">
                        <BiSolidMicrophone class="microphone" />
                    </div>
                </div>
                
                {
                    isUserLoggedIn ? (
                        <div class="header-items header-profile">
                            <BiLogOut class="logout" title='Logout' onClick={() => handleLogout()}/>
                            <img src={avtar} height={'40px'} width={'40px'}
                            ></img>
                            <p class="user-email margin-0">{localStorage.getItem('email')}</p>
                            

                        </div>
                    ) : (
                        <div class="header-items header-profile">
                            <Link to={'/signin'}>
                            <button class="header-tools">Sign In</button>
                            </Link>
                        </div>
                    )
                }
                    
            </div>
    </div>
  )
}

export default Header

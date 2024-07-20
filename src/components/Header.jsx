/* eslint-disable no-unused-vars */
import {useEffect,useState} from 'react'

import { getProductbyCategory } from '../services/Products';

import Categories from './Categories';

import '../assets/css/style.css';
import MinorBanner from './MinorBanner';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header className="navbar" style={{justifyContent:'space-around'}}>
      <div className="logo" style={{ cursor: "pointer" }}>
        <a href="/">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            style={{ maxWidth: 36, maxHeight: 48 }}
          />
        </a>
      </div>

      <div className="menu">
            <Categories/>
        </div>

        
      <div className="loginsession">
        <img
          src="#"
          alt="avatar"
          style={{ width: 50, height: 50, borderRadius: 50, padding: 5 }}
        />
        <div className="loginicon">
          <img src="/src/assets/images/login.png" alt="" />
        </div>
        <div className="carticon" style={{ cursor: "pointer" }}>
          <a href="">
            <img src="/src/assets/images/cart-icon.png" alt="" />
          </a>
        </div>

        <div className="accountdesktop" style={{ display: "none" }}>
          <div className="header-links">
            <ul className="popup-header-links">
              <li className="li_ico-register">
                <Link to={`/signup/`} className="ico-register">
                  Tạo tài khoản ngay
                </Link>
              </li>
              <li className="li_ico-login">
                <a href="" className="ico-login">
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    
  </>
  )
}

export default Header
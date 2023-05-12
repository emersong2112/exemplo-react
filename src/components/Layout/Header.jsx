import React from 'react';
import { MdNotifications, MdOutlineHelp } from "react-icons/md";
import logo from '../../assets/images/logo.png';
import Avatar from '../general/Avatar';

const Header = () => {

  return (
    <header>
      <figure id='logo'>
        <img src={logo} alt="logo" />

      </figure>
        <aside>
            <MdNotifications size={18} />
            <MdOutlineHelp size={18} />
            <Avatar name='Marcos Augusto' />
        </aside>
    </header>
  )
}

export default Header
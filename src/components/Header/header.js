//import useState hook to create menu collapse state
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";

const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  let navigate = useNavigate();

  //Logout functionality
  const submit = ()=>{
    window.localStorage.setItem('token',null);
    navigate('/');
  }

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader className="bgSide">
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p className="logo">Logo</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {/* {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />} */}
            </div>
          </SidebarHeader>
          <SidebarContent className="bgSide">
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Property
              </MenuItem>
              <MenuItem icon={<FaList />}>Assistance</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Received Interest</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Property Views</MenuItem>
              <MenuItem icon={<BiCog />}>Tariff Plan</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="bgSide">
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={submit}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;

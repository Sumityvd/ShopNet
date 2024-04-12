import React, { Fragment,useState } from 'react';
import "./Header.css";
import { SpeedDial,SpeedDialAction } from "@material-ui/lab";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useAlert } from 'react-alert';
import {  useDispatch,useSelector } from 'react-redux';
import {logout} from "../../../actions/userAction";
import Backdrop from "@material-ui/core/Backdrop";

// import { useHistory } from "react-router";

const UserOptions = ({user,history}) => {
    const [open,setOpen] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();
    const {cartItems}  = useSelector((state) => state.cart);

    const options= [
        {icon : <ListAltIcon/> ,name: "Orders",func: orders},
        {icon: <PersonIcon/>, name: "Profile",func: account},
        {icon: <ShoppingCartIcon style={{color: cartItems.length > 0 ? "tomato" : "unset"}}/>,
         name: `Cart(${cartItems.length})`,
         func: cart},
        {icon: <ExitToAppIcon/>, name: "Logout",func: logoutUser},
    ]

    if(user.role === "admin"){
        options.unshift({ //Add Dashboard icon if user is admin
            icon: <DashboardIcon/>,
            name: "DashBoard",
            func: dashboard,
        });
    }

    function dashboard(){
        history.push("/admin/dashboard");
    }

    function orders(){
        history.push("/orders");
    }

    function account(){
        history.push("/account");
    }

    
    function cart(){
        history.push("/cart");
    }

    function logoutUser(){
        dispatch(logout());
        alert.success("Logout Successfully");
    }

  return (
  <Fragment>
    <Backdrop open={true} style={{ zIndex: "10"}} />
        <SpeedDial 
        ariaLabel='SpeedDial tooltip  example'
        onClose = {() => setOpen(false)}
        onOpen={() => setOpen()}
        open={open}
        style={{zIndex: "11"}}
        direction="down"
        className='speedDial'
        icon = {
            <img 
                className='speedDialIcon'
                src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                alt="Profile"
            />
        }
        >
            {options.map((item) => (
                <SpeedDialAction 
                    key={item.name}
                    icon={item.icon}
                    tooltipTitle={item.name}
                    onClick={item.func}
                    tooltipOpen={window.innerWidth <=600 ? true: false}
                />
            ))}

        </SpeedDial>
  </Fragment>
  );
};

export default UserOptions
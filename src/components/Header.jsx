// import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
// import { useState, useContext } from "react";
// import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Login from "./Login";
import { useState } from "react";

function Header() {
//   const onlineStatus = useOnlineStatus();

//   const data = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(true);
  }

  function closeModal() {
    setIsVisible(false);
  }

  return (
    <div className="flex justify-between px-8 border-b border-slate-400 bg-gray-900 text-white">
      <img
        src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
        alt=""
        width="100px"
        height="100px"
      />
      <ul className="flex items-center gap-8">
        {/* <li>{data.loggedInUser}</li>
        <li>{onlineStatus ? "🟢" : "🔴"}</li> */}
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/offers">
          <li>Offers</li>
        </Link>
        <li onClick={openModal}>SignIn</li>
        <Link to="/cart">
          <li>Cart-{cartItems.length}</li>
        </Link>
      </ul>
      <Login isVisible={isVisible} onClose={closeModal}></Login>
    </div>
  );
}

export default Header;
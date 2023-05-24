import React from 'react';
import topBar from "../Top_bar.svg";

const Header = (props) => {
  return (
    <div {...props}>
        <img src={topBar} alt="top menu" />
    </div>
  )
}
export default Header;
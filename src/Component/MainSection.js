import React from "react";
// import Logo from "../img/ig1.png"
import Logo1 from "../img/ig2.jpeg";

export function MainSection(){
    return(
        <div className="mainSection">
            <img src={Logo1} alt="ig2" />
            {/* <img src={Logo} alt="ig1" /> */}
        </div>
    );
}
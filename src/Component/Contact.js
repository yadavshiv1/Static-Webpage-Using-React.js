import React  from "react";

export function Contact(){
    function Submit(){
        console.log("click");
    }
    return(
        <div className="contact">
            <h1>Contact With Us :</h1>
            <form className="form">
                <input type="FirstName"/>
                <input type="LastName" />
                <input type="Email"/>
                <input type="Contact"/>
            </form>

            <button onClick={Submit}>Submit</button>
            
        </div>
    );
}
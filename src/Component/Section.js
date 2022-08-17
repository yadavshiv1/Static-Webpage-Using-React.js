import React from "react";
import Sec1 from "../img/sec1.png";
import Sec2 from "../img/sec2.png";
import Sec3 from "../img/sec3.png";
import Sec4 from "../img/sec4.png";


export function Section() {
    return (
        <>
            <div className="section">
                <div className="s1">&nbsp;&nbsp;
                <img src={Sec1} alt="logo" />
                    <h1>Internet Explorer </h1>
                </div>
                <div className="s2">&nbsp;&nbsp;
                <img src={Sec2} alt="logo" />
                    <h1>Twitter</h1>
                </div>
                <div className="s3">&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Sec3} alt="logo" />
                    <h1>Facebook</h1>
                </div>
                <div className="s4">
                <img src={Sec4} alt="logo" />
                    <h1>Earth</h1>
                </div>

            </div>
        </>
    );
}
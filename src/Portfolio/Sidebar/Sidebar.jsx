import React, { useEffect, useState } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import './Sidebar.css';
import Spacer from "../../CommonComponents/Spacer/Spacer";
import { Colors } from "../../constants/colors";

function Sidebar() {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navBarHeight = 60;
    const maxTopPosition = 225; // Maximum top position

    const spacerHeight = '50px';

    return (
        <div className="Sidebar" style={{ top: `${Math.min(navBarHeight + scrollY / 2, maxTopPosition)}px` }}>
            <Spacer spacer={spacerHeight} color={Colors.ACCENTONE} />
            <a id="L1" href="https://www.linkedin.com/in/william-parsons-23ct/">LinkedIn</a>
            <Spacer spacer={spacerHeight} color={Colors.ACCENTONE} />
            <a id="L2" href="https://drive.google.com/file/d/1ycqNjCmiIFwLcodPwZJQTp3MEgMoYDFw/view?usp=sharing">Resume Link</a>
            <Spacer spacer={spacerHeight} color={Colors.ACCENTONE} />
            <a id="L3" href="https://github.com/wparsons2397/portfolio_website">GitHub</a>
            <Spacer spacer={spacerHeight} color={Colors.ACCENTONE} />
            <button onClick={backToTop} id="backToTop">Back to the top</button>
            <Spacer spacer={spacerHeight} color={Colors.ACCENTONE} />
        </div>
    );
}

export default Sidebar;
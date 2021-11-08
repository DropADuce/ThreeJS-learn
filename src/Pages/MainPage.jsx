import React from 'react';
import StyledNavbar from "../Components/Navbar";

const MainPage = () => {
    return (
        <div>
            <StyledNavbar isMain/>
            <h1>Это главная страница</h1>
        </div>
    );
};

export default MainPage;
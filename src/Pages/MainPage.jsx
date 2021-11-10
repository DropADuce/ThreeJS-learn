import React from 'react';
import PageWrapper from "../Components/HOC/PageWrapper";

const MainPage = () => {
    return (
        <div>
            <h1>Это главная страница</h1>
        </div>
    );
};

export default PageWrapper(MainPage);
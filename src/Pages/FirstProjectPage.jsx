import React from 'react';
import PageWrapper from "../Components/HOC/PageWrapper";

const FirstProjectPage = () => {
    return (
        <div>
            <h1>
                Тут будет первая 3д сцена!
            </h1>
        </div>
    );
};

export default PageWrapper(FirstProjectPage);
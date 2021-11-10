import React from 'react';
import PageWrapper from "../Components/HOC/PageWrapper";
import {Canvas} from "@react-three/fiber";
import Box from "../Components/3D/Box";

const FirstProjectPage = () => {
    return (
        <Canvas camera={{position: [0, 0, 4]}}> // [x, y, z] координаты
            <Box position={[-4,0,0]}/>
            <Box position={[0,0,0]} rotation={[Math.PI / 4, Math.PI / 4, 0]} />
            <Box position={[4,0,0]}/>
        </Canvas>
    );
};

export default PageWrapper(FirstProjectPage);
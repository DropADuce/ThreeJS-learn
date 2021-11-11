import React from 'react';
import PageWrapper from "../Components/HOC/PageWrapper";
import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import Plane from "../Components/3D/Plane";
import PhysicBox from "../Components/3D/PhysicBox";

const PhysicsPage = () => {
    return (
        <Canvas camera={{position: [5, 2, 0], zoom: 1}}>
            <Physics>
                <color attach='background' args={['lightblue']}/>
                <hemisphereLight intensity={0.35}/>
                <spotLight position={[10, 10, 10]}
                           angle={0.3}
                           penumbra={10}
                           intesity={2}
                           castShadow
                />
                <Plane/>
                <PhysicBox/>
                <PhysicBox position={[0, 8, 0]}/>
            </Physics>
        </Canvas>
    );
};

export default PageWrapper(PhysicsPage);
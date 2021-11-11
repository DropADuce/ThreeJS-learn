import React from 'react';
import {usePlane} from "@react-three/cannon";

const Plane = (props) => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI/2, 0, 0], ...props}))
    return (
        <mesh ref={ref}>
            <planeBufferGeometry args={[10, 10]}/>
        </mesh>
    );
};

export default Plane;
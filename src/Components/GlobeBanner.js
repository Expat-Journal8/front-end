import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
// import { Box } from "drei";



const SpinningMesh = ( {position} ) =>{
    const mesh = useRef(null);
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh position={position} ref={mesh}>{/**class representing triangular poly mesh obj */}
            <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
            <meshStandardMaterial attach='material' color='blue'/>
         </mesh>  
    )
};

const Globe =()=>{
    return (
      <div className="globeWrap">
        <Canvas colorManagement camera={{position: [0,0,50],fov:5}}>{/**no html in the canvas, only 3js elements */}
            <ambientLight intensity={0.4}/>
            <SpinningMesh position={[ -1.4,0,0 ]}/>        
            <SpinningMesh position={[ 0,-4,-70 ]}/>        
            <SpinningMesh position={[ 1.3,0,20 ]}/>        
        </Canvas>
      </div>
    )
};

export default Globe;{}
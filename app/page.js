// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import { useRef } from "react";
import { Canvas , useFrame} from "@react-three/fiber";
import { OrbitControls, Text3D,Center, Environment,Shadow,Sparkles, PerspectiveCamera } from "@react-three/drei";
// import { Orbit } from "next/font/google";



  
let size = 1
function MyName (){

  const nameRef = useRef();
useFrame(({clock})=> { let a = clock.elapsedTime 
  nameRef.current.rotation.y = a
});
return <mesh ref={nameRef}>
        <Text3D 
          // ref={nameRef}
          curveSegments={32}
          bevelEnabled
          // position={}
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}
          font="/Resources/Comic Relief_Regular.json">
          {`Sidzinga\nMaseko`}
          <meshNormalMaterial />
              <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={size * 1.5} position={[0, -size, 0]} color="black" opacity={1}/>
        
        </Text3D>
        </mesh>


} 
export default function Home() {
  return (
  <>
  <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
    <PerspectiveCamera position={[0, 25, 0]} rotation={[Math.PI / 6, 0, 0]} />
   <ambientLight intensity={2} />
    <Environment
      files="Resources/sunset_jhbcentral_2k.hdr"
      ground={{ height: 5, radius: 40, scale: 20 }}
    />
<Center rotation={[-0.5, -0.25, 0]} position={[-3, 5, 1]}>
  <MyName/>
  <Sparkles count={500} scale={size * 10} size={6} speed={0.4} />
       {/* <OrbitControls autoRotateSpeed={0.85} zoomSpeed={0.75} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55} /> */}
      </Center>

    <OrbitControls 
    autoRotateSpeed={0.85} zoomSpeed={0.75} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55} />
  </Canvas>
  </>
  );
}

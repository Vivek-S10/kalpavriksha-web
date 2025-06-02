// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../layout/Loader";

// // Kalpavriksha Tree Model Component
// const KalpavrikshaTree: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
//   const tree = useGLTF("./kalpavriksha_tree.glb");
//   return (
//     <group>
//       <hemisphereLight intensity={0.4} groundColor="black" />
//       <directionalLight position={[5, 10, 7.5]} intensity={1.2} castShadow />
//       <ambientLight intensity={0.5} />
//       <primitive
//         object={tree.scene}
//         // Adjusted for better fit and visibility
//         scale={isMobile ? 1.1 : 1.35}
//         position={isMobile ? [0, -2.2, 0] : [0, -3.2, 0]}
//         rotation={[0, Math.PI / 8, 0]}
//       />
//     </group>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = (event: MediaQueryListEvent) => {
//       setIsMobile(event.matches);
//     };
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [5, 5, 5], fov: 25 }}
//       style={{ height: "100vh", width: "100vw" }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         {/* <OrbitControls enableZoom={false} /> */}
//         <KalpavrikshaTree isMobile={isMobile} />
//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   TbArrowsShuffle2,
//   TbPlayerPlay,
//   TbPlayerSkipBack,
//   TbPlayerSkipForward,
//   TbVolume,
// } from "react-icons/tb";
// import DefaultThumbnail from "./DefaultThumbnail";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";

// const Player = () => {
//   const [isVolumeOpen, setIsVolumeOpen] = useState(false);

//   const [isRandom, setIsRandom] = useState(false)

//   //closeVolume on click outside
//   const volumeRef = useRef(null);

//   useEffect(() => {
//     const closeVolume = (e) => {
//       if (!volumeRef.current?.contains(e.target)) setIsVolumeOpen(false);
//     };
//     document.addEventListener("click", closeVolume, true);
//     return () => {
//       document.removeEventListener("click", closeVolume, true);
//     };
//   }, []);

//   return (
//     <div className="w-screen max-h-max bg-primary2">
//       <div className=" w-full h-full flex justify-center items-center py-10 px-20 bg-transparent">
//         <div className="container w-3/4 h-28 bg-gray-400 mx-auto px-3 lg:px-3 flex justify-between rounded-md outline-none ">
//           <div className=" bg-transparent flex items-center lg:w-3/12 gap-2">
//             <div className=" bg-transparent w-14 h-14 lg:flex-shrink-0">
//               <DefaultThumbnail />
//             </div>
//             <div className="flex flex-col gap-1 bg-transparent">
//               <h6 className=" bg-transparent text-sm font-semibold">Title</h6>
//               <span className=" bg-transparent text-xs ">Artist</span>
//             </div>
//           </div>
//           <div className=" bg-transparent flex items-center gap-3 w-2/12">
//             <button>
//               <TbPlayerSkipBack size={20} className="bg-transparent" />
//             </button>
//             <button>
//               <TbPlayerPlay
//                 size={26}
//                 className="bg-transparent rounded-full p-1 border border-primary1 outline-none"
//               />
//             </button>
//             <button>
//               <TbPlayerSkipForward size={20} className="bg-transparent" />
//             </button>
//           </div>
//           {/* progressbar */}
//           <div className="hidden lg:flex w-6/12 flex-col gap-1 justify-center bg-transparent">
//             <Slider
//               trackStyle={{
//                 background: "#146e5f",
//               }}
//               handleStyle={{
//                 border: "2px #00000",
//                 background: "#146e5f",
//                 boxShadow: "none",
//                 opacity: 1,
//               }}
//               className=" bg-transparent"
//             />
//             <div className=" bg-transparent flex justify-between text-xs">
//               <span className="bg-transparent">00:00</span>
//               <span className="bg-transparent">03:29</span>
//             </div>
//           </div>
//           {/* settings */}
//           <div className=" bg-transparent flex justify-end gap-3 lg-w-1/12 ml-8">
//             <div className=" bg-transparent relative flex items-center h-full" ref={volumeRef}>
//               {isVolumeOpen && (
//                 <div className="flex absolute -top-2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg w-8 h-20 rounded-2xl overflow-hidden bg-secondary py-4 justify-center">
//                   <Slider
//                     vertical
//                     min={0}
//                     max={1}
//                     step={0.01}
//                     className=" bg-transparent"
//                   />
//                 </div>
//               )}
//               <button
//                 onClick={() => setIsVolumeOpen(!isVolumeOpen)}
//                 className=" bg-transparent"
//               >
//                 <TbVolume size={20} className="bg-transparent" />
//               </button>
//             </div>
//             <button className=" bg-transparent" onClick={() => setIsRandom(!isRandom)}>
//               <TbArrowsShuffle2 size={20} color={isRandom ? "#146e5f" : ""} className="bg-transparent" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Player;

// // ArijitSinghDetailsPage.js
// import React from "react";
// import img1 from "../images/arijit.png"; // Ensure the path to the image is correct

// const Finished = () => {
//   return (
//     <div className="bg-black min-h-screen text-white flex flex-col items-center py-8">
//       <h1 className="text-4xl font-bold text-violet-400 mb-4">Arijit Singh Live Concert</h1>
//       <img src={img1} alt="Arijit Singh Show" className="w-96 mb-6 rounded-lg shadow-lg" />

//       <div className="bg-slate-900 p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 text-center">
//         <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>

//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Tickets Sold:</span> 400 </p>
        
//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Date:</span> 25th March 2024</p>
        
//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Time:</span> 7:00 PM - 10:00 PM</p>
        
//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Age Limit:</span> 16 years and above</p>
        
//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Total Duration:</span> 3 hours</p>
        
//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Venue:</span> XYZ Auditorium, Mumbai</p>
        
//         <p className="text-lg mb-4"><span className="font-bold text-violet-200">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//          soulful performances and mesmerizing melodies. Fans were captivated
//           by his heartfelt renditions of popular hits. Held on 25 March 2024 , the concert showcased
//            Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//             experience for all attendees at the venue</p>
//       </div>
//     </div>
//   );
// };

// export default Finished;





// import React from "react";
// import img1 from "../images/arijit2.jpg"; // Ensure the path to the image is correct

// const Finished = () => {
//   return (
//     <div className="bg-black min-h-screen text-white flex items-center justify-center py-8">
//       <div className="flex flex-col md:flex-row items-center justify-center w-11/12 max-w-5xl">
//         {/* Left Side: Event Details */}
//         <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
//           {/* <h1 className="text-4xl font-bold text-violet-400 mb-4">Arijit Singh Live Concert</h1> */}
//           <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
//             <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>

//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Tickets Sold:</span> 400 </p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Date:</span> 25th March 2024</p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Time:</span> 7:00 PM - 10:00 PM</p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Age Limit:</span> 16 years and above</p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Total Duration:</span> 3 hours</p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Venue:</span> XYZ Auditorium, Mumbai</p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//              soulful performances and mesmerizing melodies. Fans were captivated
//               by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
//                Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//                 experience for all attendees at the venue.</p>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="flex justify-center items-center w-full md:w-1/2 lg:w-3/5">
//           <img src={img1} alt="Arijit Singh Show" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Finished;



// import React from "react";
// import img1 from "../images/arijit2.jpg"; // Ensure the path to the image is correct

// const Finished = () => {
//   return (
//     <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
//       {/* Main Content Container */}
//       <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
//         {/* Left Side: Event Details */}
//         <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
//           {/* Event Details Container */}
//           <div className="bg-slate-900 p-6 rounded-lg shadow-lg mb-6 md:mb-0">
//             <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>
            
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Tickets Sold:</span> 400</p>
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Date:</span> 25th March 2024</p>
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Time:</span> 7:00 PM - 10:00 PM</p>
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Age Limit:</span> 16 years and above</p>
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Total Duration:</span> 3 hours</p>
//             <p className="text-lg mb-4"><span className="font-bold text-violet-200">Venue:</span> XYZ Auditorium, Mumbai</p>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="flex justify-center items-center w-full md:w-1/2 lg:w-3/5">
//           <img src={img1} alt="Arijit Singh Show" className="w-full h-auto max-w-md rounded-lg shadow-lg mb-6 md:mb-0" />
//         </div>
//       </div>

//       {/* Bottom Section: Description */}
//       <div className="w-11/12 md:w-3/4 lg:w-2/3 text-center md:text-left p-6 mt-6">
//         <p className="text-lg text-white mb-4">
//           <span className="font-bold text-white">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//           soulful performances and mesmerizing melodies. Fans were captivated
//           by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
//           Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//           experience for all attendees at the venue.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Finished;



// import React from "react";
// import img1 from "../images/arijit2.jpg"; // Ensure the path to the image is correct
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// const Finished = () => {
//   return (
//     <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
//       {/* Main Content Container */}
//       <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
//         {/* Left Side: Event Details */}
//         <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
//           {/* Event Details Container */}
//           <div className="bg-black p-6 rounded-lg shadow-lg mb-6 md:mb-0">
//             <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>

//             <p className="text-lg mb-4 flex items-center">
//               <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
//               <span className="font-bold text-violet-200"></span> 400
//             </p>
//             <p className="text-lg mb-4 flex items-center">
//               <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
//               <span className="font-bold text-violet-200"></span> 25th March 2024
//             </p>
//             <p className="text-lg mb-4 flex items-center">
//               <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
//               <span className="font-bold text-violet-200"></span> 7:00 PM - 10:00 PM
//             </p>
//             <p className="text-lg mb-4 flex items-center">
//               <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
//               <span className="font-bold text-violet-200"></span> 16 years and above
//             </p>
//             <p className="text-lg mb-4 flex items-center">
//               <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
//               <span className="font-bold text-violet-200"></span> 3 hours
//             </p>
//             <p className="text-lg mb-4 flex items-center">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
//               <span className="font-bold text-violet-200"></span> XYZ Auditorium, Mumbai
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="flex justify-center items-center w-full md:w-1/2 lg:w-3/5">
//           <img src={img1} alt="Arijit Singh Show" className="w-full h-auto max-w-md rounded-lg shadow-lg mb-6 md:mb-0" />
//         </div>
//       </div>

//       {/* Bottom Section: Description */}
//       <div className="w-11/12 md:w-3/4 lg:w-2/3 text-center md:text-left p-6 mt-6">
//         <p className="text-lg text-white mb-4">
//           <span className="font-bold text-white">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//           soulful performances and mesmerizing melodies. Fans were captivated
//           by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
//           Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//           experience for all attendees at the venue.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Finished;












// import React, { useState, useEffect } from "react";
// import img1 from "../images/arijit2.jpg"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import './finished.css';

// const Finished = () => {

//   const [visibleDetail, setVisibleDetail] = useState(0);
//   const [visibleDescription, setVisibleDescription] = useState(false);

//   useEffect(() => {
//     if (visibleDetail < 6) {
//       const timer = setTimeout(() => {
//         setVisibleDetail(visibleDetail + 1);
//       }, 500); 
//       return () => clearTimeout(timer); 
//     } else {
//       const descriptionTimer = setTimeout(() => {
//         setVisibleDescription(true);
//       }, 1000); 
//       return () => clearTimeout(descriptionTimer);
//     }
//   }, [visibleDetail]);

//   return (
//     <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
      
//       <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
        
//         <div className="flex flex-col items-center w-full md:w-1/2 lg:w-3/5">
//           <div className="text-center mb-6 md:mb-0">
//             <h1 className="title font-size-30px text-3xl font-bold text-violet-300">The Arijit Singh Live Concert</h1>
//           </div>
//           <img src={img1} alt="Arijit Singh Show" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
//         </div>

//         <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          
//           <div className="bg-black p-6 rounded-lg shadow-lg">
//             <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>

//             {visibleDetail >= 1 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 400
//               </p>
//             )}
//             {visibleDetail >= 2 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 14th July 2024
//               </p>
//             )}
//             {visibleDetail >= 3 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 7:00 PM - 10:00 PM
//               </p>
//             )}
//             {visibleDetail >= 4 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 16 years+
//               </p>
//             )}
//             {visibleDetail >= 5 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 3 hours
//               </p>
//             )}
//             {visibleDetail >= 6 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> Rod Laver Arena, Melbourne
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {visibleDescription && (
//         <div className="w-11/12 md:w-3/4 lg:w-2/3 text-center md:text-left p-6 mt-6 opacity-0 transition-opacity duration-1000" style={{ opacity: 1, transition: 'opacity 1s ease', transitionDelay: '1s' }}>
//           <p className="description-text text-lg text-white mb-4">
//             <span className="font-bold text-white">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//             soulful performances and mesmerizing melodies. Fans were captivated
//             by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
//             Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//             experience for all attendees at the venue.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Finished;








// import React, { useState, useEffect } from "react";
// import img1 from "../images/arijit2.jpg"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import './finished.css';

// const Finished = () => {

//   const [visibleDetail, setVisibleDetail] = useState(0);
//   const [visibleDescription, setVisibleDescription] = useState(false);

//   useEffect(() => {
//     if (visibleDetail < 6) {
//       const timer = setTimeout(() => {
//         setVisibleDetail(visibleDetail + 1);
//       }, 500); 
//       return () => clearTimeout(timer); 
//     } else {
//       const descriptionTimer = setTimeout(() => {
//         setVisibleDescription(true);
//       }, 1000); 
//       return () => clearTimeout(descriptionTimer);
//     }
//   }, [visibleDetail]);

//   return (
//     <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
      
//       <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
        
//         <div className="flex flex-col items-center w-full md:w-1/2 lg:w-3/5">
//           <div className="text-center mb-6 md:mb-0">
//             <h1 className="title font-size-30px text-3xl font-bold text-violet-300">The Arijit Singh Live Concert</h1>
//           </div>
//           <a href="https://youtu.be/7_al1xaaZJU?si=WbcvQW-kXzMoQhxs" target="_blank" rel="noopener noreferrer">
//             <img src={img1} alt="Arijit Singh Show" className="w-full h-auto max-w-md rounded-lg shadow-lg cursor-pointer" />
//           </a>
//         </div>

//         <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          
//           <div className="bg-black p-6 rounded-lg shadow-lg">
//             <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>

//             {visibleDetail >= 1 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 400
//               </p>
//             )}
//             {visibleDetail >= 2 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 14th July 2024
//               </p>
//             )}
//             {visibleDetail >= 3 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 7:00 PM - 10:00 PM
//               </p>
//             )}
//             {visibleDetail >= 4 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 16 years+
//               </p>
//             )}
//             {visibleDetail >= 5 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 3 hours
//               </p>
//             )}
//             {visibleDetail >= 6 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> Rod Laver Arena, Melbourne
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {visibleDescription && (
//         <div className="w-11/12 md:w-3/4 lg:w-2/3 text-center md:text-left p-6 mt-6 opacity-0 transition-opacity duration-1000" style={{ opacity: 1, transition: 'opacity 1s ease', transitionDelay: '1s' }}>
//           <p className="description-text text-lg text-white mb-4">
//             <span className="font-bold text-white">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//             soulful performances and mesmerizing melodies. Fans were captivated
//             by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
//             Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//             experience for all attendees at the venue.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Finished;

























// import React, { useState, useEffect } from "react";
// import img1 from "../images/arijit2.jpg"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import './finished.css';

// const Finished = () => {
//   const [visibleDetail, setVisibleDetail] = useState(0);
//   const [visibleDescription, setVisibleDescription] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);

//   useEffect(() => {
//     if (visibleDetail < 6) {
//       const timer = setTimeout(() => {
//         setVisibleDetail(visibleDetail + 1);
//       }, 200); 
//       return () => clearTimeout(timer); 
//     } else {
//       const descriptionTimer = setTimeout(() => {
//         setVisibleDescription(true);
//       }, 1000); 
//       return () => clearTimeout(descriptionTimer);
//     }
//   }, [visibleDetail]);

//   const handleImageClick = () => {
//     setShowVideo(true);
//   };

//   return (
//     <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
      
//       <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
        
//         <div className="flex flex-col items-center w-full md:w-1/2 lg:w-3/5">
         
//           {!showVideo ? (
//             <img
//               src={img1}
//               alt="Arijit Singh Show"
//               className="w-full h-auto max-w-md rounded-lg shadow-lg cursor-pointer"
//               onClick={handleImageClick}
//             />
//           ) : (
//             <div className="w-full h-auto max-w-md rounded-lg shadow-lg">
//               <iframe
//                 width="100%"
//                 height="315"
//                 src="https://www.youtube.com/embed/7_al1xaaZJU"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           )}
//         </div>

//         <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          
//           <div className="bg-black p-6 rounded-lg shadow-lg">
//           <div className=" mb-6 md:mb-0">
//             <h1 className="title font-size-30px text-3xl font-bold text-violet-300">The Arijit Singh Live Concert</h1>
//           </div>
            

//             {visibleDetail >= 1 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 400
//               </p>
//             )}
//             {visibleDetail >= 2 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 14th July 2024
//               </p>
//             )}
//             {visibleDetail >= 3 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 7:00 PM - 10:00 PM
//               </p>
//             )}
//             <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>
            
//             {visibleDetail >= 5 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 3 hours
//               </p>
//             )}

//             {visibleDetail >= 4 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> 16 years+
//               </p>
//             )}
//             {visibleDetail >= 6 && (
//               <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
//                 <span className="font-bold text-violet-200"></span> Rod Laver Arena, Melbourne
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {visibleDescription && (
//         <div className="w-11/12 md:w-3/4 lg:w-2/3 text-center md:text-left p-6 mt-6 opacity-0 transition-opacity duration-1000" style={{ opacity: 1, transition: 'opacity 1s ease', transitionDelay: '1s' }}>
//           <p className="description-text text-lg text-white mb-4">
//             <span className="font-bold text-white">Description:</span> The Arijit Singh Live Concert was a spectacular event filled with
//             soulful performances and mesmerizing melodies. Fans were captivated
//             by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
//             Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
//             experience for all attendees at the venue.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Finished;







import React, { useState, useEffect } from "react";
import img1 from "../images/arijit2.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './finished.css';

const Finished = () => {
  const [visibleDetail, setVisibleDetail] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (visibleDetail < 6) {
      const timer = setTimeout(() => {
        setVisibleDetail(visibleDetail + 1);
      }, 300); 
      return () => clearTimeout(timer); 
    } else {
      const descriptionTimer = setTimeout(() => {
        setVisibleDescription(true);
      }, 1000); 
      return () => clearTimeout(descriptionTimer);
    }
  }, [visibleDetail]);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
      <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
        
        {/* Image and Description Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 lg:w-3/5">
          {!showVideo ? (
            <img
              src={img1}
              alt="Arijit Singh Show"
              className="w-full h-auto max-w-md rounded-lg shadow-lg cursor-pointer mb-4"
              onClick={handleImageClick}
            />
          ) : (
            <div className="w-full h-auto max-w-md rounded-lg shadow-lg mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/7_al1xaaZJU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Description directly below the image/video */}
          {visibleDescription && (
            <p className="underline underline-offset-4 text-lg text-white mt-4">
              <span className="font-bold">About:</span> 
            </p>
          )}

          {visibleDescription && (
            <p className="text-lg text-white mt-4">
              <span>The Arijit Singh Live Concert was a spectacular event filled with
              soulful performances and mesmerizing melodies. Fans were captivated
              by his heartfelt renditions of popular hits. Held on 25 March 2024, the concert showcased
              Arijit Singh's incredible vocal range and emotional depth, creating an unforgettable
              experience for all attendees at the venue.</span> 
              <hr className="my-4 w-full mx-auto border-t border-gray-200" />
            </p>
          )}
          {visibleDescription && (
            <p className="underline underline-offset-4 text-lg text-white mt-4">
              <span className="font-bold">About the Artist:</span>
            </p>
          )}
          {visibleDescription && (
          <p className="text-lg text-white mt-4">
              <span>Arijit Singh is an acclaimed Indian playback singer
               known for his soulful voice and versatile singing style. With numerous chart-topping
                hits across various languages, he has become a prominent figure in Bollywood music,
                 captivating audiences worldwide with his emotional depth and powerful renditions of
                  romantic and melodious songs</span> 
            </p>
          )}
        </div>

        {/* Event Details Section */}
        
        <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
        
          <div className="p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 max-w-ms">
            <div className="mb-6 md:mb-0">
              <h1 className="title font-size-30px text-3xl font-bold text-violet-300">The Arijit Singh Live Concert</h1>
            </div>

            {visibleDetail >= 1 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
                400
              </p>
            )}
            {visibleDetail >= 2 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
                14th July 2024
              </p>
            )}
            {visibleDetail >= 3 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
                7:00 PM - 10:00 PM
    
              </p>
            )}
            </div>
            <div className="border border-gray-200 rounded-lg p-4 max-w-ms">
            <p className="text-xl text-violet-300 font-semibold mb-2">Event Guide
            <hr className="my-4 w-3/4 border-t border-gray-200" />
            </p>
            
            {visibleDetail >= 5 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
                3 hours
              </p>
            )}

            {visibleDetail >= 4 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
                16 years+
              </p>
            )}
            {visibleDetail >= 6 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
                Rod Laver Arena, Melbourne
              </p>
            )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finished;

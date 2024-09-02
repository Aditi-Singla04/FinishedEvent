// import React from "react";
// import { Link } from "react-router-dom"; // Import the Link component
// import img1 from '../images/arijit2.jpg';
// import img2 from '../images/armaan.jpg';
// import img3 from '../images/akash.jpg';
// import img4 from '../images/shashi.jpg';
// import img5 from '../images/aujla.png';
// import img6 from '../images/bassi.jpg';

// const HomePage = () => {
//   return (
//     <div className="bg-black min-h-screen text-white">
//       <div className="finished-shows">
//         <div className="line flex bg-black m-auto w-11/12 mt-2">
//           <div className="tile-1 bg-slate-900 text-white flex m-4">
//             <div className="left">
//               <img
//                 src={img1}
//                 alt="Arijit Singh Show"
//                 className="w-72 p-2"
//               />
//             </div>
//             <div className="right">
//               <div className="textt w-80 m-2">
//                 <div className="title text-violet-400 font-serif">
//                   Concert A - Arijit Singh Show
//                 </div>
//                 <div className="desc font-serif text-violet-200">
//                 "Experience the soulful melodies of Arijit Singh live, as he brings his mesmerizing
//                  voice to the stage, captivating audiences with his heartfelt performances.
//                 </div>
//               </div>
//               <div className="rightt-2 flex justify-center">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="tile-2 bg-slate-900 text-white flex m-4">
//             <div className="left">
//               <img
//                 src={img2}
//                 alt="Armaan Malik"
//                 className="w-72 p-2"
//               />
//             </div>
//             <div className="right">
//               <div className="textt w-80 m-2">
//                 <div className="title text-violet-400 font-serif">
//                   Concert B - Armaan Malik Show
//                 </div>
//                 <div className="desc font-serif text-violet-200">
//                 Get ready to groove with Armaan Malik's electrifying live performance,
//                  filled with her chart-topping hits and infectious energy
//                 </div>
//               </div>
//               <div className="rightt-2 flex justify-center">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="line flex bg-black m-auto w-11/12 mt-2">
//           <div className="tile-1 bg-slate-900 text-white flex m-4">
//             <div className="left">
//               <img
//                 src={img3}
//                 alt="Akash Gupta Show"
//                 className="w-72 p-2"
//               />
//             </div>
//             <div className="right">
//               <div className="textt w-80 m-2">
//                 <div className="title text-violet-400 font-serif">
//                   Concert C - Akash Gupta Show
//                 </div>
//                 <div className="desc font-serif text-violet-200">
//                 Laugh out loud with Akash Gupta's hilarious stand-up comedy, where everyday life meets
//                  side-splitting humor and witty observations.
//                 </div>
//               </div>
//               <div className="rightt-2 flex justify-center">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
          
//           <div className="tile-2 bg-slate-900 text-white flex m-4">
//             <div className="left">
//               <img
//                 src={img4}
//                 alt="Shashi Dhiman Show"
//                 className="w-72 p-2"
//               />
//             </div>
//             <div className="right">
//               <div className="textt w-80 m-2">
//                 <div className="title text-violet-400 font-serif">
//                   Concert D - Shashi Dhiman Show
//                 </div>
//                 <div className="desc font-serif text-violet-200">
//                 Experience the wit and charm of Shashi Dhiman as he delivers punchlines that
//                  will leave you in stitches and wanting more.
//                 </div>
//               </div>
//               <div className="rightt-2 flex justify-center">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="line flex bg-black m-auto w-11/12 mt-2">
//           <div className="tile-1 bg-slate-900 text-white flex m-4">
//             <div className="left">
//               <img
//                 src={img5}
//                 alt="Karan Aujla Show"
//                 className="w-72 p-2"
//               />
//             </div>
//             <div className="right">
//               <div className="textt w-80 m-2">
//                 <div className="title text-violet-400 font-serif">
//                   Concert E - Karan Aujla Show
//                 </div>
//                 <div className="desc font-serif text-violet-200">
//                 Get ready for an electrifying night with Karan Aujla, as he brings his
//                  high-energy Punjabi beats and hit tracks to the stage.
//                 </div>
//               </div>
//               <div className="rightt-2 flex justify-center">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
          
//           <div className="tile-2 bg-slate-900 text-white flex m-4">
//             <div className="left">
//               <img
//                 src={img6}
//                 alt="Anubhav Bassi Show"
//                 className="w-72 p-2"
//               />
//             </div>
//             <div className="right">
//               <div className="textt w-80 m-2">
//                 <div className="title text-violet-400 font-serif">
//                   Concert F - Anubhav Bassi Show
//                 </div>
//                 <div className="desc font-serif text-violet-200">
//                 Laugh out loud with Anubhav Bassi as he takes you on a hilarious journey
//                  through his witty anecdotes and relatable stories.
//                 </div>
//               </div>
//               <div className="rightt-2 flex justify-center">
//                 <Link
//                  to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;







// import React from "react";
// import { Link } from "react-router-dom"; // Import the Link component
// import img1 from '../images/arijit2.jpg';
// import img2 from '../images/armaan2.jpg';
// import img3 from '../images/aakash.jpg';
// import img4 from '../images/shashi.jpg';
// import img5 from '../images/aujla.png';
// import img6 from '../images/bassi.jpg';

// const HomePage = () => {
//   return (
//     <div className="bg-black min-h-screen text-white">
//       <div className="finished-shows">
//         {/* First Row */}
//         <div className="line flex flex-wrap justify-between bg-black m-auto w-11/12 mt-4">
//           <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
//             <img
//               src={img1}
//               alt="Arijit Singh Show"
//               className="w-72"
//             />
//             <div className="textt w-72 mt-2">
//               <div className="title text-violet-400 font-serif text-center">
//                 Concert A - Arijit Singh Show
//               </div>
//               <div className="desc font-serif text-violet-200 text-center mt-1">
//                 Experience the soulful melodies of Arijit Singh live, as he brings his mesmerizing
//                 voice to the stage, captivating audiences with his heartfelt performances.
//               </div>
//               <div className="flex justify-center mt-2">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
//             <img
//               src={img2}
//               alt="Armaan Malik"
//               className="w-72"
//             />
//             <div className="textt w-72 mt-2">
//               <div className="title text-violet-400 font-serif text-center">
//                 Concert B - Armaan Malik Show
//               </div>
//               <div className="desc font-serif text-violet-200 text-center mt-1">
//                 Get ready to groove with Armaan Malik's electrifying live performance,
//                 filled with her chart-topping hits and infectious energy.
//               </div>
//               <div className="flex justify-center mt-2">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
//             <img
//               src={img3}
//               alt="Akash Gupta Show"
//               className="w-72"
//             />
//             <div className="textt w-72 mt-2">
//               <div className="title text-violet-400 font-serif text-center">
//                 Concert C - Akash Gupta Show
//               </div>
//               <div className="desc font-serif text-violet-200 text-center mt-1">
//                 Laugh out loud with Akash Gupta's hilarious stand-up comedy, where everyday life meets
//                 side-splitting humor and witty observations.
//               </div>
//               <div className="flex justify-center mt-2">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="line flex flex-wrap justify-between bg-black m-auto w-11/12 mt-4">
//           <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
//             <img
//               src={img4}
//               alt="Shashi Dhiman Show"
//               className="w-72"
//             />
//             <div className="textt w-72 mt-2">
//               <div className="title text-violet-400 font-serif text-center">
//                 Concert D - Shashi Dhiman Show
//               </div>
//               <div className="desc font-serif text-violet-200 text-center mt-1">
//                 Experience the wit and charm of Shashi Dhiman as he delivers punchlines that
//                 will leave you in stitches and wanting more.
//               </div>
//               <div className="flex justify-center mt-2">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
//             <img
//               src={img5}
//               alt="Karan Aujla Show"
//               className="w-72"
//             />
//             <div className="textt w-72 mt-2">
//               <div className="title text-violet-400 font-serif text-center">
//                 Concert E - Karan Aujla Show
//               </div>
//               <div className="desc font-serif text-violet-200 text-center mt-1">
//                 Get ready for an electrifying night with Karan Aujla, as he brings his
//                 high-energy Punjabi beats and hit tracks to the stage.
//               </div>
//               <div className="flex justify-center mt-2">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
//             <img
//               src={img6}
//               alt="Anubhav Bassi Show"
//               className="w-72"
//             />
//             <div className="textt w-72 mt-2">
//               <div className="title text-violet-400 font-serif text-center">
//                 Concert F - Anubhav Bassi Show
//               </div>
//               <div className="desc font-serif text-violet-200 text-center mt-1">
//                 Laugh out loud with Anubhav Bassi as he takes you on a hilarious journey
//                 through his witty anecdotes and relatable stories.
//               </div>
//               <div className="flex justify-center mt-2">
//                 <Link
//                   to="/detailsFinsihed"
//                   className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;







import React from "react";
import { Link } from "react-router-dom"; 
import img1 from '../images/arijit2.jpg';
import img2 from '../images/armaan2.jpg';
import img3 from '../images/aakash.jpg';
import img4 from '../images/shashi.jpg';
import img5 from '../images/aujla3.jpg';
import img6 from '../images/bassi.jpg';
import './bg.css'

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white p-0 m-0">
      <div className="finished-shows">
        {/* First Row */}
        <div className="line flex flex-wrap justify-between bg-black m-auto w-11/12 mt-4">
          {/* Arijit Singh Show */}
          <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
            <img
              src={img1}
              alt="Arijit Singh Show"
              className="w-72 h-40 object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-violet-400 font-serif text-center">
                Concert A - Arijit Singh Show
              </div>
              <div className="desc font-serif text-violet-200 text-center mt-1">
                Experience the soulful melodies of Arijit Singh live, as he brings his mesmerizing
                voice to the stage, captivating audiences with his heartfelt performances.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/detailsFinsihed"
                  className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Armaan Malik Show */}
          <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
            <img
              src={img2}
              alt="Armaan Malik"
              className="w-72 h-40 object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-violet-400 font-serif text-center">
                Concert B - Armaan Malik Show
              </div>
              <div className="desc font-serif text-violet-200 text-center mt-1">
                Get ready to groove with Armaan Malik's electrifying live performance,
                filled with her chart-topping hits and infectious energy.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/detailsFinsihed"
                  className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Akash Gupta Show */}
          <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
            <img
              src={img3}
              alt="Akash Gupta Show"
              className="w-72 h-40 object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-violet-400 font-serif text-center">
                Concert C - Akash Gupta Show
              </div>
              <div className="desc font-serif text-violet-200 text-center mt-1">
                Laugh out loud with Akash Gupta's hilarious stand-up comedy, where everyday life meets
                side-splitting humor and witty observations.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/detailsFinsihed"
                  className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="line flex flex-wrap justify-between bg-black m-auto w-11/12 mt-4">
          {/* Shashi Dhiman Show */}
          <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
            <img
              src={img4}
              alt="Shashi Dhiman Show"
              className="w-72 h-40 object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-violet-400 font-serif text-center">
                Concert D - Shashi Dhiman Show
              </div>
              <div className="desc font-serif text-violet-200 text-center mt-1">
                Experience the wit and charm of Shashi Dhiman as he delivers punchlines that
                will leave you in stitches and wanting more.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/shashiDetails"
                  className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Karan Aujla Show */}
          <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
            <img
              src={img5}
              alt="Karan Aujla Show"
              className="w-72 h-40 object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-violet-400 font-serif text-center">
                Concert E - Karan Aujla Show
              </div>
              <div className="desc font-serif text-violet-200 text-center mt-1">
                Get ready for an electrifying night with Karan Aujla, as he brings his
                high-energy Punjabi beats and hit tracks to the stage.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/detailsFinsihed"
                  className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Anubhav Bassi Show */}
          <div className="tile bg-slate-900 text-white flex flex-col items-center m-4">
            <img
              src={img6}
              alt="Anubhav Bassi Show"
              className="w-72 h-40 object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-violet-400 font-serif text-center">
                Concert F - Anubhav Bassi Show
              </div>
              <div className="desc font-serif text-violet-200 text-center mt-1">
                Laugh out loud with Anubhav Bassi as he takes you on a hilarious journey
                through his witty anecdotes and relatable stories.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/detailsFinsihed"
                  className="bg-black text-violet-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



















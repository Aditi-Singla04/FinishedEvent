import React from "react";
import img1 from '../images/arijit.png'
import img2 from '../images/neha.png'
import img3 from '../images/akash.jpg'
import img4 from '../images/shashi.jpg'
import img5 from '../images/aujla.png'
import img6 from '../images/bassi.jpg'

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <nav className="bg-[#000000] p-4 shadow-lg">
        <div className="container mx-auto flex flex-col">
          <div className="flex justify-between items-center">
            <a href="https://aashwinxgarg.github.io/Tickeve-frontend-designs/">
              <div className="text-white text-3xl font-bold px-6">Tickeve</div>
            </a>
            <div className="flex items-center space-x-10 relative">
              <div className="px-34 text-lg">
                <button className="text-white focus:outline-none">Shows</button>
                <a
                  className="text-white px-8"
                  href="https://aashwinxgarg.github.io/Tickeve-frontend-designs/"
                >
                  About
                </a>
              </div>
              <div className="mr-4"></div>
              <a
                className="text-white py-2 px-5 rounded-xl border border-white"
                href="https://aashwinxgarg.github.io/Tickeve-frontend-designs/"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Upcoming Shows */}
      <div className="upcoming-shows">
        {/* Line 1 */}
        <div className="line flex bg-black m-auto w-11/12 mt-2">
          {/* Tile 1 */}
          <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
              <img
                src={img1}
                alt="Arijit Singh Show"
                className="w-72 p-2"
              />
            </div>
            <div className="right">
              <div className="textt w-80 m-2">
                <div className="title text-violet-400 font-serif">
                  Concert A - Arijit Singh Show
                </div>
                <div className="desc font-serif text-violet-200">
                  For die heart fans of Arijit Singh as he is going to perform
                  the most intriguing songs he has ever had...
                </div>
              </div>
              <div className="rightt-2 flex justify-center">
                <a
                  href="detailsUpcomingConcerts.html"
                  className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          

          {/* Tile 2 */}
          <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left">
              <img
                src={img2}
                alt="Zakir Khan Show"
                className="w-72 p-2"
              />
            </div>
            <div className="right">
              <div className="textt w-80 m-2">
                <div className="title text-violet-400 font-serif">
                  Concert B - Zakir Khan Show
                </div>
                <div className="desc font-serif text-violet-200">
                  For fans who love Stand-Up Comedy and love to get in the realms
                  of crowdwork and funny stories...
                </div>
              </div>
              <div className="rightt-2 flex justify-center">
                <a
                  href="detailsUpcomingConcerts.html"
                  className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="line flex bg-black m-auto w-11/12 mt-2">
          {/* Tile 1 */}
          <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
              <img
                src={img3}
                alt="Arijit Singh Show"
                className="w-72 p-2"
              />
            </div>
            <div className="right">
              <div className="textt w-80 m-2">
                <div className="title text-violet-400 font-serif">
                  Concert A - Arijit Singh Show
                </div>
                <div className="desc font-serif text-violet-200">
                  For die heart fans of Arijit Singh as he is going to perform
                  the most intriguing songs he has ever had...
                </div>
              </div>
              <div className="rightt-2 flex justify-center">
                <a
                  href="detailsUpcomingConcerts.html"
                  className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          

          {/* Tile 2 */}
          <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left">
              <img
                src={img4}
                alt="Zakir Khan Show"
                className="w-72 p-2"
              />
            </div>
            <div className="right">
              <div className="textt w-80 m-2">
                <div className="title text-violet-400 font-serif">
                  Concert B - Zakir Khan Show
                </div>
                <div className="desc font-serif text-violet-200">
                  For fans who love Stand-Up Comedy and love to get in the realms
                  of crowdwork and funny stories...
                </div>
              </div>
              <div className="rightt-2 flex justify-center">
                <a
                  href="detailsUpcomingConcerts.html"
                  className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="line flex bg-black m-auto w-11/12 mt-2">
          {/* Tile 1 */}
          <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
              <img
                src={img5}
                alt="Arijit Singh Show"
                className="w-72 p-2"
              />
            </div>
            <div className="right">
              <div className="textt w-80 m-2">
                <div className="title text-violet-400 font-serif">
                  Concert A - Arijit Singh Show
                </div>
                <div className="desc font-serif text-violet-200">
                  For die heart fans of Arijit Singh as he is going to perform
                  the most intriguing songs he has ever had...
                </div>
              </div>
              <div className="rightt-2 flex justify-center">
                <a
                  href="detailsUpcomingConcerts.html"
                  className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          

          {/* Tile 2 */}
          <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left">
              <img
                src={img6}
                alt="Zakir Khan Show"
                className="w-72 p-2"
              />
            </div>
            <div className="right">
              <div className="textt w-80 m-2">
                <div className="title text-violet-400 font-serif">
                  Concert B - Zakir Khan Show
                </div>
                <div className="desc font-serif text-violet-200">
                  For fans who love Stand-Up Comedy and love to get in the realms
                  of crowdwork and funny stories...
                </div>
              </div>
              <div className="rightt-2 flex justify-center">
                <a
                  href="detailsUpcomingConcerts.html"
                  className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>

        

        {/* Repeat similar structure for other concerts... */}
        
        {/* Call to Action Section */}
        <div className="h-full w-full bg-gradient-to-b from-[#a388e9] to-[#d5c8f5] text-white border border-gray-600 rounded-xl flex flex-col items-center justify-center font-serif p-6">
          <div className="text-4xl font-bold mt-10">Be the first to get access</div>
          <div className="text-xl mt-4 text-center font-serif text-gray-200">
            You can't wait any longer, just like us?<br />
            Then sign up to our waitlist to be one of the Tickeve users.
          </div>
          <div className="text-center mt-12">
            <input
              className="py-3 px-10 font-serif mr-3 rounded-xl pr-14 text-center text-white bg-[#191919]"
              type="email"
              placeholder="Email Address"
            />
            <a className="px-6 py-4 bg-[#131314] text-white rounded-xl" href="/Concert/:id">
              Join Waitlist
            </a>
          </div>
          <hr className="w-full border-gray-900 mt-6" />
          <div className="w-full text-white font-serif flex mt-6">
            <p className="w-full text-left text-[#131314] text-3xl">
              Tickeve<br />
              <span className="text-xl">@ 2024</span>
            </p>
            <p className="w-full text-right text-[#131314]">
              Contact us: info@tickeve.com<br />
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



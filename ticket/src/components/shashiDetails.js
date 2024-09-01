import React, { useState, useEffect } from "react";
import img2 from "../images/shashi.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './finished.css';

const Finished = () => {

  const [visibleDetail, setVisibleDetail] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(false);

  useEffect(() => {
    if (visibleDetail < 6) {
      const timer = setTimeout(() => {
        setVisibleDetail(visibleDetail + 1);
      }, 500); 
      return () => clearTimeout(timer); 
    } else {
      
      const descriptionTimer = setTimeout(() => {
        setVisibleDescription(true);
      }, 1000); 
      return () => clearTimeout(descriptionTimer);
    }
  }, [visibleDetail]);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
      
      <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
        
        <div className="flex justify-center items-center w-full md:w-1/2 lg:w-3/5">
          <img src={img2} alt="Shashi Dhiman Show" className="w-full h-auto max-w-md rounded-lg shadow-lg mb-6 md:mb-0" />
        </div>

        <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          
          <div className="bg-black p-6 rounded-lg shadow-lg mb-6 md:mb-0">
            <p className="text-xl text-violet-300 font-semibold mb-2">Event Details</p>

            {visibleDetail >= 1 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
                <span className="font-bold text-violet-200"></span> 350
              </p>
            )}
            {visibleDetail >= 2 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
                <span className="font-bold text-violet-200"></span> 22th March 2024
              </p>
            )}
            {visibleDetail >= 3 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
                <span className="font-bold text-violet-200"></span> 6:00 PM - 7:30 PM
              </p>
            )}
            {visibleDetail >= 4 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
                <span className="font-bold text-violet-200"></span> 16 years+
              </p>
            )}
            {visibleDetail >= 5 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
                <span className="font-bold text-violet-200"></span> 1 hour 30 min
              </p>
            )}
            {visibleDetail >= 6 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
                <span className="font-bold text-violet-200"></span> Chandigarh
              </p>
            )}
          </div>
        </div>
      </div>

      {visibleDescription && (
        <div className="w-11/12 md:w-3/4 lg:w-2/3 text-center md:text-left p-6 mt-6 opacity-0 transition-opacity duration-1000" style={{ opacity: 1, transition: 'opacity 1s ease', transitionDelay: '1s' }}>
          <p className="description-text text-lg text-white mb-4">
            <span className="font-bold text-white">Description:</span> Experience the laughter and wit
             of Shashi Dhiman's stand-up comedy, a show that captivated audiences with his sharp
              humor and relatable anecdotes. Held recently, Shashi’s performance brought joy and
               endless laughter, showcasing his exceptional talent in turning everyday moments into
                hilarious, unforgettable comedy."
          </p>
        </div>
      )}
    </div>
  );
};

export default Finished;

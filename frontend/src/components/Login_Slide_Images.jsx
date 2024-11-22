import React, { useState, useEffect } from 'react';
import image1 from "../assets/images/login_image1.jpg";
import image2 from "../assets/images/login_image2.jpg";
import image3 from "../assets/images/login_image3.jpg";
import "../assets/styles.css";

const Login_Slide_Images = () => {

  const items = [
    { id: 1, image: image1, maintext: "Find your sweet home", subtext: "Schedule visit in just a few clicks visits in just a few clicks" },
    { id: 2, image: image2, maintext: "Free Consultation", subtext: "Connect with the agent through our in-built chat system." },
    { id: 3, image: image3, maintext: "View Detail with AR", subtext: "You can view interior details with our built-in AR system" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div key={items[currentIndex].id} className="flex flex-col py-5 px-24">
        <img
          src={items[currentIndex].image}
          alt={`Slide ${items[currentIndex].id}`}
          className="w-[80%] h-[400px] rounded-br-[20%] object-cover mb-2"
        />
        <div className="py-4">
          <h2 className="text-3xl text-blue-950 tracking-wider font-semibold">{items[currentIndex].maintext}</h2>
          <p className="text-sm mt-5 text-blue-400 tracking-wide font-semibold w-[50%]">{items[currentIndex].subtext}</p>
        </div>
        <div className="flex justify-start gap-3">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition duration-300 ${currentIndex === index ? 'bg-blue-950 w-5' : 'bg-blue-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login_Slide_Images;

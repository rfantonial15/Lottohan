import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-900 flex justify-center items-center p-6">
      <div className="bg-pink-500 p-2 px-10 rounded-lg">
        <div className="bg-blue-400 p-2 px-8 rounded-lg">
          <div className="bg-yellow-400 p-2 px-6 rounded-lg">
            <div className="bg-blue-900 p-4 px-2 rounded-lg text-white text-2xl font-bold">
              WELCOME TO LOTTERY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

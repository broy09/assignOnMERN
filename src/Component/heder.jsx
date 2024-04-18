// eslint-disable-next-line no-unused-vars
import React from "react";
import PasswordInput from "./pasword";

// eslint-disable-next-line react/prop-types
export const Headers = ({ handleAddPostClick }) => {
  return (
    <header className="bg-blue-500 p-4 px-16 flex justify-between items-center">
      <div className = "flex gap-5">
        <div className="text-white font-bold text-xl"> Home</div>
        <div >
          <button onClick={handleAddPostClick} className="text-white p-2 border-gray-500 bg-green-600  rounded-md hover:bg-lime-500 ">
            Create Post
          </button>
      
        </div>
      </div>
     
      <div className="flex justify-end">
      <div>
        <PasswordInput/>
      </div>
          <button  className="text-white p-3 border bg-yellow-600 border-black rounded-md hover:bg-opacity-80 mr-5 ml-10">
           Sign in
          </button>
          <button  className="text-white p-3 border bg-orange-600 border-black rounded-md hover:bg-opacity-80 ">
            Login
          </button>
          </div>
     
    </header>
  );
};

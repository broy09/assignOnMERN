// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = () => {
    // State to track the input type
    const [inputType, setInputType] = useState('password');

    // Function to toggle input type
    const toggleInputType = () => {
        setInputType(inputType === 'password' ? 'text' : 'password'  );
    };

    return (
        <div className="relative">
            <table>

            
           {/* <td> <label className="text-white p-2 font-bold block mb-2">Password :</label></td> */}
             <td> <div> <input
                    type={inputType}
                    placeholder="Enter your password"
                    className="w-full px-5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                {/* Render eye icon if inputType is password, otherwise render crossed eye icon */}
                <button
                    onClick={toggleInputType}
                    className="absolute top-1/2 right-4 -translate-y-1/2 border-none bg-transparent cursor-pointer"
                >
                    {inputType === 'password' ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                </button>
            </div>
            </td>
            </table>
        </div>
    );
};

export default PasswordInput;
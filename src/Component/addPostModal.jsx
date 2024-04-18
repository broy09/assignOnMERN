// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../contex/contex";
import { generateId } from "../utils/commonFunction";

// eslint-disable-next-line react/prop-types
export const AddPostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [content, setContent] = useState("");
  const [isValid, setIsvalid] = useState(false);
  const { dispatch } = useContext(PostContext);
  useEffect(() => {
    if (title.length > 2 && subtitle.length > 2 && content.length > 2 ) {
      setIsvalid(true);
    }
    
    if (title.length < 2 || subtitle.length < 2 || content.length < 2) {
      setIsvalid(false);
    }
  }, [title,subtitle, content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_POST",
      payload: {
        id: generateId(10),
        title,
        subtitle,
        content,
      },
    });
    
    setTitle("");
    setsubTitle("");
    setContent("");
  
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg w-11/12 lg:w-2/4">
        <h2 className="text-xl font-bold mb-4">Add Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
            Card Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subtitle" className="block text-gray-700">
             Card SubTitle
            </label>
            <input
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={(e) => setsubTitle(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700">
              Your small blog
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="ml-5 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

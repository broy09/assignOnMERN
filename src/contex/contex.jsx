// PostContext.js
import { createContext, useEffect, useReducer } from "react";

const localPost = JSON.parse(localStorage.getItem("posts"));
const initialState = {
  posts: localPost ? localPost : [],
};

export const PostContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      state = {
        ...state,
        posts: [...state.posts, action.payload],
      };
    // eslint-disable-next-line no-fallthrough
    case "DELETE_POST":
      state = {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("posts", JSON.stringify(state.posts));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [state]);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

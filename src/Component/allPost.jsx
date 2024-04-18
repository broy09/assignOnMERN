import { useContext } from "react";
import { PostContext } from "../contex/contex";
import { Post } from "./post";

export default function AllPost() {
  const { state, dispatch } = useContext(PostContext);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };
  return (
    <div className="px-16 flex gap-3 mt-6">
      {state.posts &&
        state.posts.map(({ id, title,subtitle, content }) => (
          <Post
            key={id}
            content={content}
            subtitle={subtitle}
            title={title}
            id={id}
            handleDelete={handleDelete}
          ></Post>
        ))}
    </div>
  );
}

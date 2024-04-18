import { useState } from "react";
import "./App.css";
import { AddPostModal } from "./Component/addPostModal";
import AllPost from "./Component/allPost";
import { Headers } from "./Component/heder";
import { PostProvider } from "./contex/contex";
import { Footer } from "./Component/footer";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPostClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <PostProvider>
        <Headers handleAddPostClick={handleAddPostClick} />
        <AllPost />
        <AddPostModal isOpen={isModalOpen} onClose={closeModal} />
        <Footer></Footer>
      </PostProvider>
      
    </div>
  );
}

export default App;

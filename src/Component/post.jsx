// eslint-disable-next-line react/prop-types
export const Post = ({ title,subtitle, content, id, handleDelete }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 w-1/4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{subtitle}</p>
      <p className="text-gray-700">{content}</p>
      <button
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => handleDelete(id)}
      >
        Delete post
      </button>
    </div>
  );
};

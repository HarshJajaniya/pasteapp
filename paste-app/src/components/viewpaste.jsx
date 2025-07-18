import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPasteById } from "../api";

const Viewpaste = () => {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    fetchPasteById(id).then((res) => setPaste(res.data));
  }, [id]);

  if (!paste) return <p>Paste not found</p>;

  return (
    // same UI with paste.title and paste.content
    <div className="flex w-full flex-col items-start p-4">
      <button
        onClick={() => navigate(-1)}
        className="ml-4 mt-4 px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <div className="w-full flex justify-center mt-10">
        <input
          className="p-2 bg-white border border-gray-300 text-black rounded-md w-[70%] placeholder-gray-600"
          type="text"
          value={paste.title}
          disabled
        />
      </div>

      <textarea
        className="mt-4 w-[70%] mx-auto p-2 min-w-[500px] text-black bg-white border border-gray-300 rounded-md placeholder-gray-600"
        value={paste.content}
        disabled
        rows={20}
      />
    </div>
  );
};

export default Viewpaste;

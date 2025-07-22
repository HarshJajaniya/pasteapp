import { createPaste, updatePaste, fetchPasteById } from "../api";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      fetchPasteById(pasteId)
        .then((res) => {
          setTitle(res.data.title);
          setValue(res.data.content);
        })
        .catch(() => console.log("Paste not found"));
    }
  }, [pasteId]);

  const handleSubmit = async () => {
    const paste = {
      title,
      content: value,
      createdat: new Date().toISOString(),
    };

    try {
      if (pasteId) {
        await updatePaste(pasteId, paste);
        toast.success("Updated successfully");
      } else {
        await createPaste(paste);
        toast.success("Created successfully");
      }
      setTitle("");
      setValue("");
      setSearchParams({});
    } catch (err) {
      console.error("Error saving paste", err);
    }
  };
  return (
    <div className="flex w-full flex-col items-start p-4">
      <div className="w-full flex justify-center mt-10">
        <input
          className="p-2 bg-white border-1 text-black rounded-md w-[70%] placeholder-gray-600"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-950 hover:border-1 active:bg-black"
        >
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <textarea
        className="mt-4 w-[70%] mx-33 p-2 min-w-[500px] text-black bg-white border-1 rounded-md placeholder-gray-600"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your content"
        rows={20}
      />
    </div>
  );
};

export default Home;

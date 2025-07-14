import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addtopastes, updatetopaste } from "../redux/pasteSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allpaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allpaste.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createpaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdat: new Date().toISOString(),
    };

    if (pasteId) {
      // update
      dispatch(updatetopaste(paste));
    } else {
      // create
      dispatch(addtopastes(paste));
    }

    // clear fields after creation or update
    setTitle("");
    setValue("");
    setSearchParams({});
  }

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
          onClick={createpaste}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-950 hover:border-1 active:bg-black"
        >
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <textarea
        className="mt-4 w-[70%] mx-35 p-2 min-w-[500px] text-black bg-white border-1 rounded-md placeholder-gray-600"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your content"
        rows={20}
      />
    </div>
  );
};

export default Home;

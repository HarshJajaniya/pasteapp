import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Paste = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [pastes, setPastes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pasteapp-2.onrender.com/api/pastes`)
      .then((res) => setPastes(res.data))
      .catch((err) => {
        toast.error("Failed to fetch pastes");
        console.error(err);
      });
  }, []);

  const handleDelete = async (pasteId) => {
    try {
      await axios.delete(
        `https://pasteapp-2.onrender.com/api/pastes/${pasteId}`
      );
      toast.success("Deleted successfully");
      setPastes((prev) => prev.filter((p) => p._id !== pasteId));
    } catch (err) {
      toast.error("Delete failed");
      console.error(err);
    }
  };

  const handleShare = (paste) => {
    const link = `${window.location.origin}/paste/${paste._id}`;
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: link,
        })
        .then(() => toast.success("Shared successfully"))
        .catch(() => toast.error("Share cancelled or failed"));
    } else {
      navigator.clipboard.writeText(link);
      toast.success("Link copied to clipboard");
    }
  };

  const handleResetAll = async () => {
    try {
      await axios.delete(`https://pasteapp-2.onrender.com/api/pastes`);
      setPastes([]);
      toast.success("All pastes deleted");
    } catch (err) {
      toast.error("Failed to reset");
    }
  };

  const filtered = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center mx-[20px]">
      <div>
        <input
          className="p-2 rounded-[8px] bg-white border-1 m-6 min-w-[600px]"
          placeholder="Search here"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleResetAll}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-red-500 active:bg-black"
        >
          Delete All
        </button>
      </div>

      <div className="flex flex-col items-center gap-5 w-full">
        {filtered.length > 0 &&
          filtered.map((paste) => {
            const formatted = new Date(paste.createdAt).toLocaleString(
              "en-IN",
              {
                dateStyle: "medium",
                timeStyle: "short",
              }
            );

            return (
              <div className="border w-[70%] p-4 rounded-[8px]" key={paste._id}>
                <div className="flex justify-between items-start w-full px-4">
                  <div className="flex flex-col gap-4">
                    <div className="font-semibold text-[18px] text-blue-600">
                      <span className="text-[16px] font-semibold text-black">
                        Title:
                      </span>{" "}
                      {paste.title}
                    </div>

                    <div className="text-[12px] font-medium line-clamp-2">
                      {paste.content}
                    </div>

                    <div className="flex items-end text-[14px] text-blue-900">
                      <DateRangeIcon /> {formatted}
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <button className="hover:text-white border-1 rounded-[4px] p-1 hover:bg-blue-500">
                      <a href={`/?pasteId=${paste._id}`}>
                        <EditIcon />
                      </a>
                    </button>
                    <button
                      className="hover:text-white border-1 rounded-[4px] p-1 hover:bg-blue-500"
                      onClick={() => handleDelete(paste._id)}
                    >
                      <DeleteOutlineIcon />
                    </button>
                    <button
                      onClick={() => navigate(`/paste/${paste._id}`)}
                      className="flex items-center gap-2 hover:text-white border-1 rounded-[4px] p-1 hover:bg-blue-500"
                    >
                      <RemoveRedEyeIcon />
                    </button>
                    <button
                      className="hover:text-white border-1 rounded-[4px] p-1 hover:bg-blue-500"
                      onClick={() => {
                        navigator.clipboard.writeText(paste.content);
                        toast.success("Copied to clipboard");
                      }}
                    >
                      <ContentCopyIcon />
                    </button>
                    <button
                      className="hover:text-white border-1 rounded-[4px] p-1 hover:bg-blue-500"
                      onClick={() => handleShare(paste)}
                    >
                      <ShareIcon />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;

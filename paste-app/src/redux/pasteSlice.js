import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: [],
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    // Set all pastes (use after fetching from backend)
    setAllPastes: (state, action) => {
      state.pastes = action.payload;
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },

    // Add a new paste after successful POST
    addtopastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully");
    },

    // Update paste after successful PUT
    updatetopaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully");
      } else {
        toast.error("Paste not found for update");
      }
    },

    // Remove paste after DELETE
    removefrompaste: (state, action) => {
      const id = action.payload;
      const index = state.pastes.findIndex((p) => p._id === id);
      if (index !== -1) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed");
      } else {
        toast.error("Paste not found");
      }
    },

    // Reset all pastes (frontend only)
    resetallpaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes cleared");
    },
  },
});

export const {
  setAllPastes,
  addtopastes,
  updatetopaste,
  removefrompaste,
  resetallpaste,
} = pasteSlice.actions;

export default pasteSlice.reducer;

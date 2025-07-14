import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addtopastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created successfully");
    },
    updatetopaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        // ✅ Update the paste in the array
        state.pastes[index] = paste;

        // ✅ Save updated array to localStorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        // ✅ Show success message
        toast.success("Paste updated successfully");
      } else {
        toast.error("Paste not found for update");
      }
    },

    resetallpaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("Paste clear successfully");
    },
    removefrompaste: (state, action) => {
      const index = state.pastes.findIndex((p) => p._id === action.payload);
      if (index !== -1) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed");
      } else {
        toast.error("Paste not found");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtopastes, updatetopaste, resetallpaste, removefrompaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;

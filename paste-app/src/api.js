import axios from "axios";

const BASE_URL = "https://pasteapp-1.onrender.com/api/pastes";

// GET all pastes
export const fetchAllPastes = () => axios.get(BASE_URL);

// GET paste by ID
export const fetchPasteById = (id) => axios.get(`${BASE_URL}/${id}`);

// POST create new paste
export const createPaste = (paste) => axios.post(BASE_URL, paste);

// PUT update existing paste
export const updatePaste = (id, paste) => axios.put(`${BASE_URL}/${id}`, paste);

// DELETE one paste
export const deletePaste = (id) => axios.delete(`${BASE_URL}/${id}`);

// DELETE all pastes
export const deleteAllPastes = () => axios.delete(BASE_URL);

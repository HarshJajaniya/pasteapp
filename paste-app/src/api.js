// client/src/api.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/pastes"; // Replace with deployed URL later

export const fetchAllPastes = () => axios.get(BASE_URL);
export const fetchPasteById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createPaste = (paste) => axios.post(BASE_URL, paste);
export const updatePaste = (id, paste) => axios.put(`${BASE_URL}/${id}`, paste);
export const deletePaste = (id) => axios.delete(`${BASE_URL}/${id}`);
export const deleteAllPastes = () => axios.delete(BASE_URL);

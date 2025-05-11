// src/components/AddNote.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../slices/noteSlice";

const AddNote = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (note.trim()) {
      dispatch(addNote(note));
      setNote("");
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
        className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddNote}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNote;

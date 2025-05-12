
import React from "react";
import { useSelector } from "react-redux";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="flex justify-center">
      <ul className="w-full max-w-md space-y-2 mt-4">
        {notes.map((note, index) => (
          <li
            key={index}
            className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-md shadow-sm"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;

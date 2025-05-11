// App.jsx
import React from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

const App = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">My Notes</h1>
      <AddNote className="" />
      <NotesList className="" />
    </div>
  );
};

export default App;

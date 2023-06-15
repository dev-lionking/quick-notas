import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";

import dummyNotes from "../dummy_notes";
import NoteItem from "../components/NoteItem";

const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>Mis Notas</h2>
        <input type="text" autoFocus placeholder="Ingrese título" />
        <button className="btn">
          <CiSearch />
        </button>
      </header>
      <div className="notes__container">
        {dummyNotes.map((note) => (
          <NoteItem key={note.id} />
        ))}
      </div>
      <Link className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;

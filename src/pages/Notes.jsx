import { CiSearch } from "react-icons/ci";

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
    </section>
  );
};

export default Notes;

import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
// import { RiDeleteBin6Line } from "react-icons/io";

const EditNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Save</button>
        <button className="btn danger">{/* <RiDeleteBin6Line /> */}</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Titulo" autoFocus />
        <textarea rows="28" placeholder="Detalle..."></textarea>
      </form>
    </section>
  );
};

export default EditNote;

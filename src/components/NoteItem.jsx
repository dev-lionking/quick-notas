import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return <Link to={"/edit-note/${note.id}"} className="note"></Link>;
};
export default NoteItem;

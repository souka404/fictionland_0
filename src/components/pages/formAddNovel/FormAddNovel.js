import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNovel } from "../../../config/actions";

function FormAddNovel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddClick = () => {
    dispatch(
      addNovel({
        id: crypto.randomUUID(),
        title: title,
        description: description,
        genre: genre,
        comments: [],
      })
    );
    navigate("/");
  };
  return (
    <form>
      <label>Title : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <label>Description : </label>
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <label>Genre : </label>
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAddClick}>Add</button>
    </form>
  );
}
export default FormAddNovel;

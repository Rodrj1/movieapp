import "./ListMaker.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList, selectLists } from "../../../features/tasks/handleLists";
import { v4 as uuid } from "uuid";
import SeparatorDetails from "../../Separator/SeparatorDetails";

const ListMaker = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState({
    name: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(createList({ ...list, items: [], uuid: uuid() }));
  };

  return (
    <>
      <SeparatorDetails separatorClass="separator-to-header" />
      <form className="list-maker">
        <h1>CREATE NEW LIST</h1>
        <input
          onChange={handleOnChange}
          name="name"
          type="text"
          placeholder="LIST NAME"
        />

        <textarea
          onChange={handleOnChange}
          name="description"
          placeholder="DESCRIPTION"
        />

        <button onClick={handleOnClick} className="list-button">
          SAVE LIST
        </button>
      </form>
    </>
  );
};

export default ListMaker;

import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../../../../features/tasks/handleLists";
import { selectLists } from "../../../../../features/tasks/handleLists";
import { v4 as uuid } from "uuid";

const UserLists = ({ movie }) => {
  const lists = useSelector(selectLists);

  const dispatch = useDispatch();

  const handleAddToList = (id) => {
    dispatch(addToList({...movie, uuid: uuid(), listName: id }));
  };

  const LISTS = lists.map((list) => (
    <div
      className="user-lists"
      key={list.uuid}
      onClick={() => handleAddToList(list.uuid)}
    >
      {list.name}
    </div>
  ));

  return (
      <button className="dropdown btn-trailer-off">
        <i className="fa-solid fa-circle-play fa-2xl"></i> Add to Lists
        <div className="dropdown-content">
          {LISTS.length > 0 ? LISTS : <div>You must create a list</div>}
        </div>
      </button>
  );
};

export default UserLists;

import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../../../../features/tasks/handleLists";
import { selectLists } from "../../../../../features/tasks/handleLists";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const UserLists = ({ type, playTrailer }) => {
  const lists = useSelector(selectLists);
  const dispatch = useDispatch();

  const handleAddToList = (id) => {
    dispatch(addToList({ ...type, uuid: uuid(), listName: id }));
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
    <>
      {!playTrailer ? (
        <button className="dropdown btn-trailer-off">
          <i className="fa-solid fa-list fa-xl" /> Add to Lists
          <div className="dropdown-content">
            {LISTS.length > 0 ? (
              <>
                {" "}
                <div className="user-lists">
                  <i className="fa-solid fa-plus" /> Create New List
                </div>{" "}
                {LISTS}
              </>
            ) : (
              <Link to="/lists" className="link">
                <div className="user-lists">
                  <i className="fa-solid fa-plus" /> Create New List
                </div>
              </Link>
            )}
          </div>
        </button>
      ) : null}
    </>
  );
};

export default UserLists;

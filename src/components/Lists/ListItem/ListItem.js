import { useDispatch } from "react-redux";
import MediaCard from "../../Media/MediaComponent/MediaCard/MediaCard";
import FunctionalButton from "../../buttons/FunctionalButton";
import {
  removeFromList,
  removeList,
} from "../../../features/tasks/handleLists";

const ListItem = ({ name, description, items, uuid }) => {
  const dispatch = useDispatch();

  const handleRemoveList = (listId) => {
    dispatch(removeList(listId));
  };

  const handleRemoveFromList = (movieId) => {
    dispatch(removeFromList(movieId));
  };

  const LISTED_MOVIES = items.map((movie) => (
    <MediaCard
      key={movie.uuid}
      media={movie}
      onRemove={() => handleRemoveFromList(movie.uuid)}
    />
  ));

  return (
    <>
      <br />
      <div className="list">
        <div>
          <h1>List: {name}</h1>
          <h3>About this list: {description}</h3>
        </div>
        <div className="flex-list-container">
          <div className="listed-movies-container">{LISTED_MOVIES}</div>
        </div>
        <FunctionalButton
          fn={handleRemoveList}
          id={uuid}
          text="DELETE LIST"
          btnClass="list-button"
        />
      </div>
      <br />
    </>
  );
};

export default ListItem;

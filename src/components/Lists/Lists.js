import "./Lists.css";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { selectLists } from "../../features/tasks/handleLists";
import ListMaker from "./ListMaker/ListMaker";
import ListItem from "./ListItem/ListItem";
import SeparatorDetails from "../Separator/SeparatorDetails";

const Lists = () => {
  const lists = useSelector(selectLists);

  const LISTS = lists.map((list) => <ListItem {...list} key={uuid()} />);

  return (
    <div className="list-container">
      <ListMaker />

      {LISTS}
    </div>
  );
};

export default Lists;

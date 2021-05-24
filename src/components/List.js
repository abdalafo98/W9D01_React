import React from "react";
import ListItem from "./ListItem";
const List = ({ todoList }) => {
  return (
    <>
      <div className="List">
        <ul>
          {todoList.map((element, index) => {
            return <ListItem todoList={element.todo} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default List;

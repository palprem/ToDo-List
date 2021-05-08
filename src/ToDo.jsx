import React from "react";

const ToDo = (props) => {
  const deleteItems = () => {};
  return (
    <>
      <div className="todo_style">
        {/* onSelect={deleteItems} */}
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDo;

import React, { useState } from "react";
import ToDo from "./ToDo";

const App = () => {
  const [inputList, setInputList] = useState("buy apple");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Add a items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItem}> + </button>
          <ol>
            {Items.map((itmval, index) => {
              return (
                <ToDo
                  key={index}
                  id={index}
                  text={itmval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;

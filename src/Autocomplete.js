import { useState } from "react";

const AutoComplete = ({ data }) => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [activeDataIndex, setActiveDataIndex] = useState(0);

  const inputChangeHandler = (e) => {
    const userInput = e.target.value;
    const filterValues = data.filter((suggestion) => {
      return suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });

    setInput(e.target.value);
    setFilteredData(filterValues);
    setShowData(true);
    setActiveDataIndex(0);
  };

  const onClick = (e) => {
    setFilteredData([]);
    console.log(e.target.innerText);
    setInput(e.target.innerText);
    setShowData(false);
    setActiveDataIndex(0);
  };

  const DataListComponent = () => {
    return filteredData.length ? (
      <ul className="suggestions">
        {filteredData.map((suggestion, index) => {
          return (
            <li key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div>No Data available </div>
    );
  };

  // this i beyind time
  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      setInput(filteredData[activeDataIndex]);
      setActiveDataIndex(0);
      setShowData(false);
    } else if (e.keycode === 38) {
      if (activeDataIndex === 0) {
        return;
      }
      setActiveDataIndex(activeDataIndex - 1);
    } else if (e.keycode === 40) {
      if (activeDataIndex - 1 === filteredData.length) {
        return;
      }
      setActiveDataIndex(activeDataIndex + 1);
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={inputChangeHandler}
        onKeyDown={keyDownHandler}
      />
      {showData && input && <DataListComponent />}
    </>
  );
};

export default AutoComplete;

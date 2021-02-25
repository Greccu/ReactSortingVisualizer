// colors - https://flatuicolors.com/palette/gb

import React, {
  useState,
  useEffect, //useRef
} from "react";
import {
  Button,
  Button2,
  Navbar,
  SortingAlgorithms,
  ArrayContainer,
  Bar,
  RangeWrapper,
  RangeLabel,
} from "./SortingVisualizer";
import { BubbleSort } from "../SortingAlgorithms/SortingAlgorithms.js";
// import RubberSlider from "@shwilliam/react-rubber-slider";
// import "@shwilliam/react-rubber-slider/dist/styles.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const SortingVisualizer = () => {
  const barcolor = ["#e84118", "#8c7ae6", "#44bd32", "#fbc531"];
  const [AnimationSpeed, setAnimationSpeed] = useState(1);
  const [Length, setLength] = useState(200);
  const [Array, setArray] = useState(GetRandomArray(Length));
  const [Size, setSize] = useState(3);
  const [SortAlg, setSortAlg] = useState();
  const [SortSel, setSortSel] = useState({
    Bubble: false,
    Merge: false,
    Quick: false,
  });
  const [Buttons, setButtons] = useState({
    Lslider: false,
    Rslider: false,
    Lbutton: false,
    Rbutton: true,
    Bubble: false,
    Quick: true,
    Merge: true,
  });

  useEffect(() => {
    const arr = GetRandomArray(Length);
    setArray(arr);
    setSize(((800 / Length) * 3) / 4);
  }, [Length]);

  function generateArray() {
    const arr = GetRandomArray(Length);
    setArray(arr);
  }
  function selectSort(Alg) {
    const btns = Buttons;
    btns["Rbutton"] = false;
    setButtons(btns);
    setSortAlg(Alg);
    var aux = {};
    for (const key in ["Bubble", "Merge", "Quick"]) {
      aux[key] = false;
    }
    aux[Alg] = true;
    setSortSel(aux);
  }

  function disableButtons(mode = true) {
    const btns = Buttons;
    const keys = Object.keys(btns);
    for (const i in keys) {
      btns[keys[i]] = mode;
    }
    setButtons(btns);
  }

  function Sort() {
    disableButtons();
    switch (SortAlg) {
      case "Bubble":
        BubbleSort(Array, setArray, AnimationSpeed);
        break;
      case "Merge":
        break;
      case "Quick":
        break;
      default:
        BubbleSort(Array, setArray, AnimationSpeed);
        break;
    }
    // disableButtons(false);
  }

  return (
    <>
      <Navbar>
        <Button2 onClick={generateArray} disabled={Buttons["Lbutton"]}>
          Generate new Array
        </Button2>
        <RangeWrapper>
          <RangeLabel>Number of elements</RangeLabel>
          <RangeSlider
            disabled={Buttons["Lslider"]}
            min="10"
            max="300"
            value={Length}
            onChange={(changeEvent) => setLength(changeEvent.target.value)}
            variant="warning"
          />
        </RangeWrapper>
        <SortingAlgorithms>
          <Button
            Active={SortSel["Bubble"]}
            onClick={() => selectSort("Bubble")}
            disabled={Buttons["Bubble"]}
          >
            Bubble Sort
          </Button>
          <Button
            Active={SortSel["Quick"]}
            onClick={() => selectSort("Quick")}
            disabled={Buttons["Quick"]}
          >
            Quick Sort
          </Button>
          <Button
            Active={SortSel["Merge"]}
            onClick={() => selectSort("Merge")}
            disabled={Buttons["Merge"]}
          >
            Merge Sort
          </Button>
        </SortingAlgorithms>
        <RangeWrapper>
          <RangeLabel>Animation Speed (ms)</RangeLabel>
          <RangeSlider
            disabled={Buttons["Rslider"]}
            min="1"
            max="100"
            step="1"
            value={AnimationSpeed}
            onChange={(changeEvent) =>
              setAnimationSpeed(changeEvent.target.value)
            }
            variant="warning"
          />
        </RangeWrapper>

        <Button2 onClick={Sort} disabled={Buttons["Rbutton"]}>
          Sort
        </Button2>
      </Navbar>
      <ArrayContainer className="content">
        {Array.map((number, index) => {
          return renderBar(index, number, barcolor, Size);
        })}
      </ArrayContainer>
    </>
  );
};

export default SortingVisualizer;

function renderBar(index, number, barcolor, Size) {
  if (Size >= 24) {
    return (
      <Bar
        key={index}
        style={{
          height: `${number.value}px`,
          backgroundColor: barcolor[number.state],
          width: `${Size}px`,
          fontSize: `${Size / 2}px`,
        }}
      >
        {number.value}
      </Bar>
    );
  }
  return (
    <Bar
      key={index}
      style={{
        height: `${number.value}px`,
        backgroundColor: barcolor[number.state],
        width: `${Size}px`,
      }}
    />
  );
}

function GetRandomArray(Length) {
  const size = Length;
  const min = 10;
  const max = 800;
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      value: Math.floor(Math.random() * (max - min) + min),
      state: 0, // 0 - initial, 1 - compare, 2 - sorted, 3 - pivot
    });
  }
  return array;
}

export function BubbleSort(Array, setArray, ANIMATION_SPEED) {
  const arr = [];
  var n = Array.length;
  for (let i = 0; i < n; i++) {
    arr.push(Array[i].value);
  }
  var sorted = false;
  const animation_array = [];
  do {
    sorted = true;
    for (let i = 0; i < n - 1; i++) {
      animation_array.push([0, i, i + 1]);
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        animation_array.push([1, i, i + 1]);
        sorted = false;
      }
      animation_array.push([-1, i, i + 1]);
    }
    n--;
    animation_array.push([2, n]);
  } while (!sorted);
  console.log(n);
  for (let i = 0; i < Array.length; i++) {
    animation_array.push([2, i]);
  }
  animation_array.push(["stop"]);
  console.log(arr);
  Animate(animation_array, Array, setArray, ANIMATION_SPEED);
}

function reconstruct(arr) {
  const array = [];
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    array.push({
      value: arr[i].value,
      state: arr[i].state, // 0
    });
  }
  return array;
}

function Animate(animation_array, Array, setArray, ANIMATION_SPEED) {
  var arr = Array;
  for (let i = 0; i < animation_array.length; i++) {
    setTimeout(() => {
      switch (animation_array[i][0]) {
        case 0: //compare
          arr[animation_array[i][1]].state = 1;
          arr[animation_array[i][2]].state = 1;
          break;
        case -1: //stop compare
          arr[animation_array[i][1]].state = 0;
          arr[animation_array[i][2]].state = 0;
          break;
        case 1: //swap
          let j = animation_array[i][1];
          let k = animation_array[i][2];
          [arr[j], arr[k]] = [arr[k], arr[j]];
          setArray(reconstruct(arr));
          break;
        case 2: //sorted
          arr[animation_array[i][1]].state = 2;
          setArray(reconstruct(arr));
          break;
        default:
          console.log("error");
      }
    }, ANIMATION_SPEED * i);
  }
}

function TestAnimate(Array, setArray, ANIMATION_SPEED) {
  var arr = Array;
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    setTimeout(() => {
      let j = i;
      let k = i + 1;
      [arr[j], arr[k]] = [arr[k], arr[j]];
      setArray(reconstruct(arr));
    }, ANIMATION_SPEED * i);
  }
}

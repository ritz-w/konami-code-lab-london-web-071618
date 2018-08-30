const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // Keys for A, B, and C keys.
  const alphabet = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];
  // Keep track of index outside of the event handler.
  let index = 0;

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    const key = e.key;

    if (key === alphabet[index]) {
      if (index < alphabet.length - 1 ){
      console.log("working")
      index++;
    } else {
      console.log("worked", alert);
      window.alert("hi");
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)

}

let frameID;
const getDiv = document.getElementsByClassName("frame");
const smoothAnimation = () => {
  getDiv[0].insertAdjacentHTML("afterend", "<div class='frame'></div>");
  frameID = requestAnimationFrame(smoothAnimation);
};

const onStart = () => {
  frameID = requestAnimationFrame(smoothAnimation);
  console.log(frameID)
};

const onStop = () => {
  cancelAnimationFrame(frameID);
};

console.log("reqAnimationId", frameID)
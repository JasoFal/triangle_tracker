function triangleTracker(event) {
  event.preventDefault();
  
  let sideA = parseInt(document.querySelector(`input#side-a`).value);
  let sideB = parseInt(document.querySelector(`input#side-b`).value);
  let sideC = parseInt(document.querySelector(`input#side-c`).value);
  let sumOfSideAAndB = sideA + sideB;
  let sumOfSideAAndC = sideA + sideC;
  let sumOfSideBAndC = sideB + sideC;

  let triangleType;
  if (sumOfSideAAndB <= sideC || sumOfSideAAndC <= sideB || sumOfSideBAndC <= sideA) {
    triangleType = `Not a triangle`;
  } else if (sideA == sideB && sideB == sideC) {
    triangleType = `Equilateral`;
  } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
    triangleType = `Isosceles`; 
  } else if (sideA != sideB && sideB != sideC && sideA != sideC) {
    triangleType = `Scalene`;
  } else {
    window.alert(`ERROR`);
  }

  document.getElementById(`triangle-output`).innerText = triangleType;
}

window.addEventListener(`load`, function() {
  const userInputs = this.document.getElementById(`user-inputs`);
  userInputs.addEventListener(`submit`, triangleTracker);
});
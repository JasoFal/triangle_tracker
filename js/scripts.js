function triangleTracker(event) {
  event.preventDefault();
  
  let sideA = parseInt(document.querySelector(`input#side-a`).value);
  let sideB = parseInt(document.querySelector(`input#side-b`).value);
  let sideC = parseInt(document.querySelector(`input#side-c`).value);
  let sumOfSideAAndB = sideA + sideB;
  let sumOfSideAAndC = sideA + sideC;
  let sumOfSideBAndC = sideB + sideC;

  let triangleType;
  if (sideA == sideB || sideA == sideC || sideB == sideC) {
    triangleType = `Isosceles`;
  } else if (sideA == sideB == sideC) {
    triangleType = `Equilateral`;
  } else if (sideA != sideB != sideC) {
    triangleType = `Scalene`;
  } else if (sumOfSideAAndB <= sideC || sumOfSideAAndC <= sideB || sumOfSideBAndC <= sideA) {
    triangleType = `Not a triangle`;
  }

}
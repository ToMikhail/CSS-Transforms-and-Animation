const btnTransScale = document.querySelector(".trans-func-scale");
const btnTransScaleX = document.querySelector(".trans-func-scale-x");
const btnTransScaleY = document.querySelector(".trans-func-scale-y");
const btnTransScale1 = document.querySelector(".trans-func-scale-1");

const btnTransTrans = document.querySelector(".trans-func-translate");
const btnTransTransX = document.querySelector(".trans-func-translate-x");
const btnTransTransY = document.querySelector(".trans-func-translate-y");

const btnTransRotation = document.querySelector(".trans-func-rotation");

const btnTransSkewX = document.querySelector(".trans-func-skew-x");
const btnTransSkewY = document.querySelector(".trans-func-skew-y");
const btnTransSkew = document.querySelector(".trans-func-skew");

const btnTransMatrix = document.querySelector(".trans-func-matrix");

const btnTransOriginCenter = document.querySelector(".trans-origin-center");
const btnTransOrigin = document.querySelector(".trans-origin-not-center");

const btnTransMultTranslateX1 = document.querySelector(".trans-mult-translate-x1");
const btnTransMultTranslateX2 = document.querySelector(".trans-mult-translate-x2");
const btnTransMultTranslateY1 = document.querySelector(".trans-mult-translate-y1");
const btnTransMultTranslateY2 = document.querySelector(".trans-mult-translate-y2");
const btnTransMultRotate1 = document.querySelector(".trans-mult-rotate1");
const btnTransMultRotate2 = document.querySelector(".trans-mult-rotate2");


const nameFuncDescription = document.querySelector(".name-func-description");


const squareViolet = document.querySelector(".square-violet");
const squareGreen = document.querySelector(".square-green");
const squareRed = document.querySelector(".square-red");

/* TRANSFORM FUNCTION */

/* SCALE */
btnTransScale.addEventListener("click", () => {
  if (squareViolet.style.transform==="scale(1.5)") {
    squareViolet.style.transform="scale(1)";
  } else {
    squareViolet.style.transform="scale(1.5)"
  }
});

btnTransScaleX.addEventListener("click", () => {
  if (squareViolet.style.transform==="scaleX(2)") {
    squareViolet.style.transform="scaleX(1)";
  } else {
    squareViolet.style.transform="scaleX(2)";
  }
});

btnTransScaleY.addEventListener("click", () => {
  if (squareViolet.style.transform==="scaleY(2)") {
    squareViolet.style.transform="scaleY(1)";
  } else {
    squareViolet.style.transform="scaleY(2)";
  }
});

btnTransScale1.addEventListener("click", () => {
  if (squareViolet.style.transform==="scale(0.5, 2)") {
    squareViolet.style.transform="scale(1)";
  } else {
    squareViolet.style.transform="scale(0.5, 2)";
  }
});

/* TRANSLATE */
btnTransTrans.addEventListener("click", () => {
  if (squareViolet.style.transform==="translate(-150%, -100%)") {
    squareViolet.style.transform="translate(0)";
  } else {
    squareViolet.style.transform="translate(-150%, -100%)";
  }
});

btnTransTransX.addEventListener("click", () => {
  if (squareViolet.style.transform==="translateX(100%)") {
    squareViolet.style.transform="translateX(0)";
  } else {
    squareViolet.style.transform="translateX(100%)";
  }
});

btnTransTransY.addEventListener("click", () => {
  if (squareViolet.style.transform==="translateY(100%)") {
    squareViolet.style.transform="translateY(0)";
  } else {
    squareViolet.style.transform="translateY(100%)";
  }
});

/* ROTATION */
btnTransRotation.addEventListener("click", () => {
  if (squareViolet.style.transform==="rotate(45deg)") {
    squareViolet.style.transform="rotate(0)";
  } else {
    squareViolet.style.transform="rotate(45deg)";
  }
});

/* SKEW */
btnTransSkewX.addEventListener("click", () => {
  if (squareViolet.style.transform==="skewX(30deg)") {
    squareViolet.style.transform="skewX(0)";
  } else {
    squareViolet.style.transform="skewX(30deg)";
  }
});

btnTransSkewY.addEventListener("click", () => {
  if (squareViolet.style.transform==="skewY(30deg)") {
    squareViolet.style.transform="skewY(0)";
  } else {
    squareViolet.style.transform="skewY(30deg)";
  }
});

btnTransSkew.addEventListener("click", () => {
  if (squareViolet.style.transform==="skew(30deg, 20deg)") {
    squareViolet.style.transform="skew(0)";
  } else {
    squareViolet.style.transform="skew(30deg, 20deg)";
  }
});

/* MATRIX */
btnTransMatrix.addEventListener("click", () => {
  if (squareViolet.style.transform==="matrix(1.5, 0, .5, 1.5, 50, 0)") {
    squareViolet.style.transform="none";
  } else {
    squareViolet.style.transform="matrix(1.5, 0, .5, 1.5, 50, 0)";
  }
});

/* ORIGIN CENTER */
/* CENTER */
btnTransOriginCenter.addEventListener("click", () => {
  squareGreen.style.transformOrigin="center"; 
  if (squareGreen.style.animation==="circle 5s linear 0s infinite") {
    squareGreen.style.animation="none"
  } else {
    squareGreen.style.animation="circle 5s linear 0s infinite"; 
  }
});

btnTransOrigin.addEventListener("click", () => {
  squareGreen.style.transformOrigin="-50% 50%"; 
  squareGreen.style.animation="circle 5s linear 0s infinite"; 
});

/*MULTIPLY TRANSFORM */

btnTransMultTranslateX1.addEventListener("click", () => {
  let tmp = nameFuncDescription.innerText;
  let styleTransform = squareRed.style.transform;
  squareRed.style.transform=`${styleTransform} translateX(100%)`;
  if (tmp === "none") {
    nameFuncDescription.innerText = `translateX(100%)`;
  } else {
    nameFuncDescription.innerText = `${tmp} translateX(100%)`;
  }
})

btnTransMultTranslateX2.addEventListener("click", () => {
  let tmp = nameFuncDescription.innerText;
  let styleTransform = squareRed.style.transform;
  squareRed.style.transform=`${styleTransform} translateX(-100%)`;
  if (tmp === "none") {
    nameFuncDescription.innerText = `translateX(-100%)`;
  } else {
    nameFuncDescription.innerText = `${tmp} translateX(-100%)`;
  }
})

btnTransMultTranslateY1.addEventListener("click", () => {
  let tmp = nameFuncDescription.innerText;
  let styleTransform = squareRed.style.transform;
  squareRed.style.transform=`${styleTransform} translateY(100%)`;
  if (tmp === "none") {
    nameFuncDescription.innerText = `${styleTransform} translateY(100%)`;
  } else {
    nameFuncDescription.innerText = `${tmp} translateY(100%)`;
  }
})

btnTransMultTranslateY2.addEventListener("click", () => {
  let tmp = nameFuncDescription.innerText;
  let styleTransform = squareRed.style.transform;
  squareRed.style.transform=`${styleTransform} translateY(-100%)`;
  if (tmp === "none") {
    nameFuncDescription.innerText = `translateY(-100%)`;
  } else {
    nameFuncDescription.innerText = `${tmp} translateY(-100%)`;
  }
})

btnTransMultRotate1.addEventListener("click", () => {
  let tmp = nameFuncDescription.innerText;
  let styleTransform = squareRed.style.transform;
  squareRed.style.transform=`${styleTransform} rotate(90deg)`;
  if (tmp === "none") {
    nameFuncDescription.innerText = `ratate(90deg)`;
  } else {
    nameFuncDescription.innerText = `${tmp} translateY(90deg)`;
  }
})

btnTransMultRotate2.addEventListener("click", () => {
  let tmp = nameFuncDescription.innerText;
  let styleTransform = squareRed.style.transform;
  squareRed.style.transform=`${styleTransform} rotate(-90deg)`;
  if (tmp === "none") {
    nameFuncDescription.innerText = `ratate(-90deg)`;
  } else {
    nameFuncDescription.innerText = `${tmp} translateY(-90deg)`;
  }
})


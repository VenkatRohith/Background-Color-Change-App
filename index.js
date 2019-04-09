let selectedFormat;
let isAlphaSelected;

const hexCodeMapping = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f",
};

const handleCheckboxClick = () => {
  isAlphaSelected = !isAlphaSelected;
};

const handleRadioClick = (cntrl) => {
  selectedFormat = cntrl.id;
};

const generateRGBColor = () => {
  const redVariant = Math.floor(Math.random() * 255);
  const greenVariant = Math.floor(Math.random() * 255);
  const blueVariant = Math.floor(Math.random() * 255);
  return { redVariant, greenVariant, blueVariant };
};

const generateHSLColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const sat = Math.floor(Math.random() * 100);
  const light = Math.floor(Math.random() * 100);
  return { hue, sat, light };
};

const generateHEXColor = () => {
  let hexColor = "#";
  for (let itr = 0; itr < 6; itr++) {
    const randomNum = Math.floor(Math.random() * 15);
    hexColor += hexCodeMapping[randomNum];
  }
  return hexColor;
};

const generateAlpha = () => {
  return Math.round(Math.random() * 10) / 10;
};

const handleBtnClick = () => {
  const containerRef = document.getElementById("color-container");
  const computedValRef = document.getElementById("computedValue");
  switch (selectedFormat) {
    case "hex":
      let hex = generateHEXColor();
      if (isAlphaSelected) {
        const randomFirstNum = Math.floor(Math.random() * 15);
        hex += hexCodeMapping[randomFirstNum];
        const randomSecondNum = Math.floor(Math.random() * 15);
        hex += hexCodeMapping[randomSecondNum];
        containerRef.style.backgroundColor = hex;
        computedValRef.innerHTML = `Computed HEX with Alpha: ${hex}`;
      } else {
        containerRef.style.backgroundColor = hex;
        computedValRef.innerHTML = `Computed HEX: ${hex}`;
      }

      break;
    case "hsl":
      const { hue: h, sat: s, light: l } = generateHSLColor();
      if (isAlphaSelected) {
        const alphaVal = generateAlpha();
        const hslaColor = `hsla(${h},${s}%,${l}%,${alphaVal})`;
        containerRef.style.backgroundColor = hslaColor;
        computedValRef.innerHTML = `Computed HSLA: ${hslaColor}`;
      } else {
        const hslColor = `hsl(${h},${s}%,${l}%)`;
        containerRef.style.backgroundColor = hslColor;
        computedValRef.innerHTML = `Computed HSL: ${hslColor}`;
      }
      break;
    case "rgb":
    default:
      const {
        redVariant: r,
        greenVariant: g,
        blueVariant: b,
      } = generateRGBColor();
      if (isAlphaSelected) {
        const alphaVal = generateAlpha();
        const rgbaColor = `rgba(${r},${g},${b},${alphaVal})`;
        containerRef.style.backgroundColor = rgbaColor;
        computedValRef.innerHTML = `Computed RGBA: ${rgbaColor}`;
      } else {
        const rgbColor = `rgb(${r},${g},${b})`;
        containerRef.style.backgroundColor = rgbColor;
        computedValRef.innerHTML = `Computed RGB: ${rgbColor}`;
      }

      break;
  }
};

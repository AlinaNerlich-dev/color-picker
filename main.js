import './style.css';

const ColorPalette = {
  '#FCE762': 'Maize',
  '#E4E6C3': 'Beige',
  '#FFB17A': 'Sandy Brown',
  '#4F4789': 'Ultra Violet',
  '#201335': 'Dark Purpel',
};

const select = document.getElementById('color-picker');

// eslint-disable-next-line no-return-assign
Object.entries(ColorPalette).forEach((color) => select.innerHTML += `<option value=${color[0]} id="color-option">${color[1]}</option>`);

function changeColor() {
  const selectedColor = document.getElementById('color-picker');
  const colorName = document.getElementById('color-name');
  document.body.style.backgroundColor = selectedColor.value;
  colorName.innerText = selectedColor.options[selectedColor.selectedIndex].text;
}

select.addEventListener('change', changeColor);

import "./style.css";

const Color_Palette = {
"#FCE762":'Maize',
'#E4E6C3':'Beige',
'#FFB17A':'Sandy Brown',
'#4F4789':'Ultra Violet',
'#201335':'Dark Purpel'
}

const select = document.getElementById("color-picker");

for (const color in Color_Palette){
  select.innerHTML += `<option value=${color} id="color-option">${Color_Palette[color]}</option>`;
}

select.addEventListener("change", changeColor);

function changeColor(){
  const selectedColor = document.getElementById("color-picker");
  let colorName = document.getElementById("color-name");
  document.body.style.backgroundColor = selectedColor.value;
  colorName.innerText = selectedColor.options[selectedColor.selectedIndex].text;
}


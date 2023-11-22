import "./style.css";

const Color_Palette = {
"#F7F7F2":'Baby Poweder',
'#E4E6C3':'Beige',
'#899878':'Moss Green',
'#222725':'Eerie black',
'#121113':'Night'
}


const select = document.getElementById("color-picker");

for (const color in Color_Palette){
  select.innerHTML += `<option value=${color} id="color-option">${Color_Palette[color]}</option>`;
  document.body.style.background = `${color}`;
}

select.addEventListener("change", changeColor);

function changeColor(){
  const selectedColor = document.getElementById("color-picker")
  let colorName = document.getElementById("color-name");
  document.body.style.backgroundColor = selectedColor.value;
  colorName.innerText = selectedColor.options[selectedColor.selectedIndex].text;
}



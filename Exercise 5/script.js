/* script.js */
const textInput = document.getElementById('textInput');
const borderInput = document.getElementById('borderInput');
const colorSlider = document.getElementById('colorSlider');
const fontSelect = document.getElementById('fontSelect');
const imageSize = document.getElementById('imageSize');
const styledDiv = document.getElementById('styledDiv');
const dynamicImage = document.getElementById('dynamicImage');

textInput.addEventListener('input', () => {
    styledDiv.textContent = textInput.value || 'Dynamic Box';
});

borderInput.addEventListener('input', () => {
    styledDiv.style.borderWidth = borderInput.value + 'px';
});

colorSlider.addEventListener('input', () => {
    const colorValue = colorSlider.value;
    styledDiv.style.backgroundColor = `rgb(${colorValue}, ${255 - colorValue}, ${150})`;
});

fontSelect.addEventListener('change', () => {
    styledDiv.style.fontFamily = fontSelect.value;
});

imageSize.addEventListener('input', () => {
    dynamicImage.style.width = imageSize.value + 'px';
    dynamicImage.style.height = imageSize.value + 'px';
});

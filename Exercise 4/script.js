// Toggle function for Div 1 (Right Side)
function toggleDiv1() {
    const div1 = document.getElementById('div1');
    div1.style.display = (div1.style.display === 'none' || div1.style.display === '') ? 'block' : 'none';
}

// Toggle function for Div 2 (Bottom of Page)
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    const div2 = document.getElementById('div2');
    div2.style.display = (div2.style.display === 'none') ? 'block' : 'none';
});

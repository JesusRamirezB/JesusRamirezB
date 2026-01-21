document.addEventListener('DOMContentLoaded', () => {
    const tagline = document.querySelector('.tagline');
    const text = tagline.innerText;
    tagline.innerText = '';

    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            tagline.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Start backspacing after typing is complete
            setTimeout(backspace, 500);
        }
    }
    
    function backspace() {
        if (tagline.innerText.length > 0) {
            tagline.innerText = tagline.innerText.slice(0, -1);
            setTimeout(backspace, 50);
        } else {
            // Restart the cycle after backspacing is complete
            i = 0;
            setTimeout(typeWriter, 500);
        }
    }
    
    typeWriter();
});
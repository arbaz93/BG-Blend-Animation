let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;
document.addEventListener('DOMContentLoaded', () => {

    const interactiveCursor = document.querySelector('.gradients-container .interactive');
    
    function move() {
        cursorX += (targetX - cursorX) / 5;
        cursorY += (targetY - cursorY) / 5;
    
        
        interactiveCursor.style.transform = `translate(${Math.round(cursorX)}px, ${Math.round(cursorY)}px)`;

        requestAnimationFrame(() => {
            move();
        });
    }

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    move();
})
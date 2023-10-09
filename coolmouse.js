let mousePos = { x: undefined, y: undefined };
const mouseCont = document.createElement('div');
mouseCont.style.position = 'absolute'
mouseCont.style.left = 0
document.querySelector('body').appendChild(mouseCont);

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
});

let interval;

const colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(255, 0, 255)'
]

interval = setInterval(function() {
    if (mousePos.x != undefined && mousePos.y != undefined && document.querySelector('#Gal2').matches(':hover')) {
        let div = document.createElement('div');
        mouseCont.appendChild(div);
        div.style.position = 'absolute'
        div.style.top = (mousePos.y) + 'px';
        div.style.left = (mousePos.x) + 'px';
        div.style.zIndex = 200;
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.pointerEvents = 'none';
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        div.animate([
            { transform: 'rotate(180deg) translateY(-10px) scale(0)' }
        ], {
            duration: 200,
        })

        setTimeout(() => {
            div.remove();
          }, 200);
    }
}, 60)
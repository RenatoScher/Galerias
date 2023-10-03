const photos = document.querySelector('.photos');

for (const div of photos.children) {
    const rotate = Math.floor(Math.random()*6) * [1, -1][Math.floor(Math.random() * 2)]

    div.style.transform = `rotate(${rotate}deg)`;

    div.querySelector('div').addEventListener('click', (e) => {
        closeLook(div.querySelector('div'));
    })
}
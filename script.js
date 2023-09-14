const imageElement = document.getElementById('myImage1');
const imageElement1 = document.getElementById('myImage2');
const imageElement2 = document.getElementById('myImage3');
const buttonElement1 = document.getElementById('changeImageBtn1');
const buttonElement2 = document.getElementById('changeImageBtn2');
const buttonElement3 = document.getElementById('changeImageBtn3');
const videoElement1 = document.getElementById('videos1');
const videobutton1 = document.getElementById('vidbutton1');




buttonElement1.addEventListener('click', function() {

    imageElement.src = 'pexels-samuel-jean-butler-16154791.jpg';
    buttonElement1.textContent = 'Image Changed!';

});
buttonElement2.addEventListener('click', function() {

    imageElement1.src = 'pexels-samuel-jean-butler-16154791.jpg';
    buttonElement2.textContent = 'Image Changed!';

});
buttonElement3.addEventListener('click', function() {

    imageElement2.src = 'pexels-photo-14611936.webp';
    buttonElement3.textContent = 'Image Changed!';

});

videobutton1.addEventListener('click', function() {

    videoElement1.src = 'c628808b.mp4';
    videobutton1.textContent = 'Video Changed!';

});



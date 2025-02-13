'use strict';
// get image container on page
const imgContainer = document.querySelector('.images');

// reusable wait func
const wait = (seconds) => new Promise(
    (resolve) => setTimeout(resolve, seconds * 1000)
);

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        // create new img class in document
        const img = document.createElement('img');

        // set source of image to input path
        img.src = imgPath;

        // wait for image to load
        img.addEventListener('load', function () {
            // append loaded image to page
            imgContainer.append(img);

            // resolve promise to proceed
            resolve(img);
        });

        // wait for error
        img.addEventListener('error', function () {
            // reject promise if error
            reject(new Error('Image not found'));
        });
    })
};

const loadNPause = async function () {
    try {
        // Load image 1, consolelog, wait 2 secs, clear
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 2, consolelog, wait 2 secs, clear
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 3, consolelog, wait 2 secs, clear
        img = await createImage('img/img-3.jpg');
        console.log('Image 3 loaded');
        await wait(2);
        img.style.display = 'none';

    } catch (err) {
        console.error(err);
    }
};
// loadNPause();

const loadAll = async function (imgArr) {
    try {
        // create a map of promises based on input array
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);

        // wait for all promises to finalise
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);

        // add parallel class to each loaded image
        imgsEl.forEach(img => img.classList.add('parallel'));

    } catch (err) {
        console.error(err);
    }
};

loadAll([
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg'
]);


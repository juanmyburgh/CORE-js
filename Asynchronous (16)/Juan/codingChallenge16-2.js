'use strict';

// get image container
const imgContainer = document.querySelector('.images');

// reusable wait func
const wait = (seconds) => new Promise(
    (resolve) => setTimeout(resolve, seconds * 1000)
);

// create promise & load listeners
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    })
};

let currentImg;

// create images & wait
createImage('/img/img-1.jpg')
    .then(img => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none'
        return createImage('/img/img-2.jpg')
    })
    .then(img => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none'
        return createImage('/img/img-3.jpg')
    })
    .catch(err => console.error(err))
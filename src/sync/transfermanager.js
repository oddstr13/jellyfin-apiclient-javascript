﻿function downloadFile(url, folder, localItem, imageUrl) {

    return Promise.reject();
}

function downloadSubtitles(url, folder, fileName) {

    return Promise.reject();
}

function downloadImage(url, folder, fileName) {
    return Promise.reject();
}

function resyncTransfers() {
    return Promise.resolve();
}

function getDownloadItemCount() {
    return Promise.resolve(0);
}

export default {
    downloadFile,
    downloadSubtitles,
    downloadImage,
    resyncTransfers,
    getDownloadItemCount
};
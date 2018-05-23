var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.douban.com/v2/book/1220562');
xhr.send(null);
xhr.onload = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
    }
};
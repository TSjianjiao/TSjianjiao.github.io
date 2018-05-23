// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.douban.com/v2/book/1220562');
// xhr.send(null);
// xhr.withCredentials
// xhr.onload = function () {
//     if (xhr.readyState === 4) {
//         console.log(xhr.responseText);
//     }
// };
var responseHandler; // 定义一个全局作用域的函数 
function getJSONP(url, cb) { 
    if (url.indexOf('?') === -1) { 
        url += '?callback=responseHandler'; 
    } 
    else { 
        url += '&callback=responseHandler'; 
    } // 创建script 标签 
    var script = document.createElement('script'); // 在函数内部实现包裹函数，因为要用到cb 
    responseHandler = function(json) { 
        try { cb(json) 
        } 
        finally { // 函数调用之后不管发生什么都要移除对应的标签，留着也没用 
            script.parentNode.removeChild(script); 
        } 
    } 
    script.setAttribute('src', url);
    document.body.appendChild(script); 
}
getJSONP('https://api.douban.com/v2/book/1220562', 'handleResponse')



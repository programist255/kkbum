//ES5

function getItems(url, offset = 0, limit = 10, orderBy = "date"){
    return url;
}

const getItemsA =(url, offset = 0, limit = 10, orderBy = "date") => {};

function add(a, b = 0){
    return a+b;
}

const addA = (a, b = 0) => a+b;

function addB(a, b){
    b = b ===undefined ? 0 : b;
    return a+b;
}
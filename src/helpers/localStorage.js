const saveData = (key, data) => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(key, dataJSON);
}

const getData = (key) => {
    const dataJSON = localStorage.getItem(key);
    return JSON.parse(dataJSON);
}

export { saveData, getData };

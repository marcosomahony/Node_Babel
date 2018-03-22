const cache = {};

function getCache(name) {
    return new Promise((resolve) => {
        if (cache[name]) {
            return resolve(cache[name]);
        }
        return resolve(null);
    });
}

function saveCache(pack) {
    return new Promise((resolve) => {
        cache[pack.name] = pack;
        resolve(pack);
    });
}

module.exports = {
    getCache, saveCache,
};

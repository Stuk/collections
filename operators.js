
exports.equals = function (a, b) {
    return a === b;
};

exports.compare = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
};

exports.hash = function (object) {
    return "~" + object;
};


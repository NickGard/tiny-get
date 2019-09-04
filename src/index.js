Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = function(root, path, defaultValue) {
  try {
    if (path in root) return root[path];
    if (Array.isArray(path)) path = "['" + path.join("']['") + "']";
    var obj = root;
    path.replace(
      /\[\s*(['"])(.*?)\1\s*\]|^\s*(\w+)\s*(?=\.|\[|$)|\.\s*(\w*)\s*(?=\.|\[|$)|\[\s*(-?\d+)\s*\]/g,
      function(
        wholeMatch,
        quotationMark,
        quotedProp,
        firstLevel,
        namedProp,
        index
      ) {
        obj = obj[quotedProp || firstLevel || namedProp || index];
      }
    );
    return obj == undefined ? defaultValue : obj;
  } catch (err) {
    return defaultValue;
  }
};

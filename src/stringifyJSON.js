var stringifyJSON = function(obj) {

  var res = '';

  var helperFunction = function(item) {
    if (typeof item === 'function' || item === undefined || item === null) {
      res += 'null';
    } else if (Array.isArray(item)) {
      res += '[';

      if (item.length !== 0) {
        for (var i = 0; i < item.length; i++) {
          if (Array.isArray(item[i]) || typeof item[i] === 'object') {
            helperFunction(item[i]);
          } else if (typeof item[i] === 'string') {
            res += '"' + item[i] + '"';
          } else {
            res += item[i];
          }
          res += ',';
        }
        res = res.slice(0, res.length - 1);
      }

      res += ']';
    } else if (typeof item === 'object') {
      res += '{';

      if (Object.keys(item).length !== 0) {
        for (var key in item) {
          if (typeof item[key] === 'function' || item[key] === undefined) { continue; }
          res += '"' + key + '":';
          if (Array.isArray(item[key]) || typeof item[key] === 'object') {
            helperFunction(item[key]);
          } else if (typeof item[key] === 'string') {
            res += '"' + item[key] + '"';
          } else {
            res += item[key];
          }
          res += ',';
        }
        if (res.charAt(res.length - 1) === ',') {
          res = res.slice(0, res.length - 1);
        }
      }

      res += '}';
    } else if (typeof item === 'string') {
      res += '"' + item + '"';
    } else {
      res += item;
    }


  };
  helperFunction(obj);

  return res;
};

export const iwebSetNestedObjectValue = (obj, path, val) => {
  const keys = path.split("__");
  const lastKey = keys.pop();
  const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
  lastObj[lastKey] = val;
  return obj;
};

export const iwebGetNestedObjectValue = (obj, path) => {
  const keys = path.split("__");
  const lastKey = keys.pop();
  const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
  return lastObj[lastKey];
};
export const iwebConvertKeyToObj = (inputValues) => {
  let returnedObj = {};
  Object.keys(inputValues).map((path) => {
    const value = inputValues[path];
    iwebSetNestedObjectValue(returnedObj, path, value);
  });
  return returnedObj;
};

export const flatten = function (object) {
  var tempA = {};
  for (let i in object) {
    if (typeof object[i] == "object" && object[i].inputs !== undefined) {
      let key = object[i].id;
      console.log("Key ", key, object[i]);
      var tempB = flatten(object[i].inputs);
      for (let j in tempB) {
        tempA[key + "__" + j] = tempB[j];
      }
    } else if (object[i].validation !== undefined) {
      tempA[object[i].id] = object[i].validation;
    }
  }
  return tempA;
};
export const normalFlatten = function (object) {
  var tempA = {};
  for (let i in object) {
    if (typeof object[i] == "object" && object[i] != null) {
      var tempB = normalFlatten(object[i]);
      for (let j in tempB) {
        tempA[i + "__" + j] = tempB[j];
      }
    } else {
      tempA[i] = object[i];
    }
  }
  return tempA;
};
export const flattenObj = (ob, seperator = ".") => {
  // The object which contains the
  // final result
  let result = {};

  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === "object") {
      const temp = flattenObj(ob[i], seperator);
      for (const j in temp) {
        // Store temp in result
        result[i + seperator + j] = temp[j];
      }
    }

    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
};

export const unFlattenObj = (data, seperator = ".") => {
  let result = {};
  for (let i in data) {
    let keys = i.split(seperator);
    keys.reduce((acc, value, index) => {
      return (
        acc[value] ||
        (acc[value] = isNaN(Number(keys[index + 1]))
          ? keys.length - 1 === index
            ? data[i]
            : {}
          : [])
      );
    }, result);
  }
  return result;
};
export const reGenerateJSON = (proxyJson) => {
  const proxyJsonStr = JSON.stringify(proxyJson);
  const reGeneratedJSON = JSON.parse(proxyJsonStr);
  return reGeneratedJSON;
};
export const prepareDragListData = (fieldList, schemaList) => {
  let schemaFieldNames = [];
  let returnList = [];
  /**
   * Mapping Existing Fields and its Modified Data
   */
  reGenerateJSON(schemaList).forEach((fieldMap) => {
    schemaFieldNames.push(fieldMap.id);
    returnList.push(fieldMap);
  });
  /**
   * Prepare the List based on Current Data and Remaining List
   */
  reGenerateJSON(fieldList).forEach((fieldMap) => {
    if (schemaFieldNames.includes(fieldMap.id) === false) {
      returnList.push(fieldMap);
    }
  });
  return returnList;
};

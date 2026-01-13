var compactObject = function(obj) {
    if(Array.isArray(obj)){
        return obj.map(compactObject).filter(Boolean);
    }

    if(typeof obj === "object" && obj !== null){
        let compact={};
         for(item in obj){
             let value = compactObject(obj[item]);
            if(Boolean(value)){
            compact[item] = value;
            }
        }
        return compact;
    }

    return obj;

}

console.log([null, 0, false, 1].filter((item) => Boolean(item)))

const obj = {
    name: "teju",
    age: 27,
}

for (item in obj) {
    console.log(item);
}

const obj1={
  "o": 11,
  "a": 68,
  "m": 18,
  "v": true,
  "b": false,
  "h": null,
  "r": false,
  "p": 93,
  "l": true,
  "k": "",
  "n": 79,
  "f": 18,
  "u": null,
  "j": null,
  "e": null,
  "z": {
    "d": true,
    "t": null,
    "o": 21,
    "w": null,
    "m": 82,
    "k": 35,
    "l": 26,
    "r": 45,
    "b": false,
    "z": 0,
    "i": null,
    "c": 33,
    "p": 69,
    "j": 27,
    "e": 53,
    "q": 97,
    "h": true,
    "a": true,
    "n": true,
    "f": 73,
    "u": null
  },
  "w": 12,
  "y": 0,
  "q": "",
  "t": null,
  "s": true,
  "x": false,
  "c": true,
  "i": false,
  "g": 29
}

const ans = compactObject(obj1);
console.log(Object.keys(obj1));
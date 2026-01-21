
/* 
Input

const obj = {
  name: "John",
  address: {
    city: "Bangalore",
    pin: {
      code: 560001    }
  }
}

Output

{
  name: 'John',
  'address.city': 'Bangalore',
  'address.pin.code': 560001
}

*/

function destructure(obj,parentKey="",result ={}) {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !==null && !Array.isArray(obj[key])) {
            destructure(obj[key], newKey ,result);
        } else {
            result[newKey] = obj[key];
        }
    }
}

console.log(destructure(obj));

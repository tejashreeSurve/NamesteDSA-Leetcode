const user = {
name: "Tanvi",
address: {
city: "Mumbai",
pin: 400068
},
phone: [
{
type: "phone1",
val: "732648901",
data: null
},
{
type: "phone2",
val: "72834682"
},
"Text",
"Phone 2"
]
};


function flatten(obj, parentKey="", result={}){
    for (let i in obj) {
        let newKey = parentKey ? `${parentKey}_${i}` : i;
        if (obj[i] !== null && typeof obj[i] === "object") {
            flatten(obj[i], newKey, result);
        } else {
            result[newKey] = obj[i];
        }
    }
    return result;
}
let ans = flatten({ user });
console.log(ans);
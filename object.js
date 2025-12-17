// object limitations is we can't keep obj as a key we can keep either symbol or string

const obj = {}

obj.nextLevel = {courseId : "level2"}

obj[true] = {courseId:'level1'}


const course1 = {name: 'programing hero'}

obj[course1] = {courseId:'level1'}

console.log(obj);


const map = new Map()

map.set(false, "programinghero")
map.set(course1, {courseId:"level1"})


console.log(map);

const obj2 = {
    nextLevel : {courseId : 'level2'},
    "programing-hero" : {courseId : "level2"}
}

console.log(obj2["nextLevel"]);

console.log(obj2["programing-hero"]);


 

/** * Caculates the factorial of a  non-negative integer (n!).* Factorial of n is the product of all povitive */
const permissionForPlay = (math, reading, writing, quran) => {
if(math === 'A+' && reading === true && writing === true && quran === true){
    console.log("Anisha can permissible to play");
}
else{
    console.log("anisha can not play");
}

}

const math = 'A+'
const reading = true
const writing = true
const quran = true

console.log(permissionForPlay(math, reading, writing, quran));


const map2 = new Map()

const studunt1 = {studentId:1, name:"mahbuba"}
const studunt2 = {studentId:2, name:"mahi"}

map2.set(1, studunt2)
map2.set(2, studunt1)

console.log(map2);

const valueMap = map2.forEach((value, key) => value.name = "Smart" + value.name)
console.log(valueMap);

const newMap = new Map(
  Array.from(map2, ([key, value]) => [key, { ...value, name: "Smart" + value.name }])
)

console.log('new map',newMap)
map2.delete(1)
// console.log(map.has(1))
// console.log(map2.size)

console.log([...map.values()]);
for(let key of map.keys()){
    console.log(key);
}

console.log(map.entries());
// map2.clear()

// console.log(map2);

const courses = [['programing hero', 'level1'], ["nextLevel", 'level2']]

const map4 = new Map(courses)

console.log(map4);
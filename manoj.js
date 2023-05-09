const name="sherlock";
console.log(name);
const greet =(name)=>{
    console.log('hello,${name}');
}
greet('bahubali');
greet('kattappa');
globalThis.setTimeout(()=>{
    console.log('in the timeout');
},5000);

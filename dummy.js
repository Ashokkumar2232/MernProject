const speak = () => {
    console.log('hello, ninjas');
  }
  
  speak();
  
  // Global Object
  
  // console.log(global);
  
  // global.setTimeout(() => {
  //   console.log('in the timeout');
  // }, 3000);
 /*   */
  setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
  }, 15000);

  const int = setInterval(() => {
    console.log('vels, in the interval');
  }, 2000);
  
  console.log(__dirname);
  console.log(__filename);
  
  // no access to DOM methods
  //console.log(document.querySelector);
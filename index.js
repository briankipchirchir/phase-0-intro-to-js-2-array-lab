// Write your solution here!

let cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catsat) {

   let Ncats=cats.push('Ralph');
    console.log(Ncats);
    return Ncats;
    
}
 function destructivelyprependCat(cats) {
   let destructivelyprependCat=cats.unshift('Bob')
    return destructivelyprependCat;
    
}

function destructivelyRemoveLastCat(cats) {
  let  Last=cats.pop();
    return Last;
    
}

function destructivelyRemoveFirstCat(catst) {
  let  First=cats.shift();
    return First;
    
}

function AppendCat(cats) {

  let  AppendCat=cats.push('Ralph');
    return AppendCat;
    
}
function destructivelyprependCat(cats) {
  let  destructivelyPrependCat=cats.push('Broom')
    return destructivelyPrependCat;
    return cats;
    
}
function prependCat(cats) {
   let prepend=cats.unshift('Arnold')
    return prepend;
    return cats;
    
}
destructivelyAppendCat;
destructivelyRemoveFirstCat;
destructivelyRemoveLastCat;
destructivelyprependCat;
prependCat;
AppendCat;
destructivelyprependCat;
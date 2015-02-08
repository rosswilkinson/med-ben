/*var airlines = document.getElementById('airlines');
//airlines.addEventListener('click', addSelected);
//var list = [airlines];

//function addSelected (){
//  for (var x in list) {
//        x.parentElement.classList.remove('selected');
//    } 
//    airlines.parentElement.classList.add('selected');
//}

// create an array of all inputs on a page
// add event listener to the array
 on click add selected and remove it from all of the others



for (var foo in list) {
    var t = foo.innerHTML();
    alert(t);
}

*/

var airlines = document.getElementById('airlines');
airlines.addEventListener('click', addSelected(airlines));

function addSelected (x){
    x.parentElement.classList.remove('selected');
    airlines.parentElement.classList.add('selected');
}

//funtion returning function.
/*
function sum(a){
    return function(b){
        return a + b;
    }
}

//var s =sum(8);
//var r = s(6);
//console.log(r);

console.log(sum(8)(6));
*/
//in case of function expression.
/*
var abc = function(job){
    return function(name){
        return 'his name is '+ name + ' his job is '+ job;
    }
}
console.log(abc('writer')('john'));
*/


//function taking arguments as function.
/*
var abc = function(ar,fun){
    var arr =[];
    for (var i = 0;i<ar.length;i++){
    arr.push(fun(ar[i]));
}
    console.log(arr);
}
ar = [1990,1991,1998];
function fun(ar){
    return  2020 - ar;
}
abc(ar,fun);
*/

//creation of objects using function constructors.

/*
var Person = function(name,birthYear,city){
    this.name = name;
    this.birthYear = birthYear;
    this.city = city;
  //  this.calcAge = function(){   //in this case the calcAge() method gets inherited by all objects created by using this Person constructor.
        //console.log(2020-this.birthYear);
    //}
}

Person.prototype.calcAge =  function(){  //so, we can define the properties here.
    return 2020 - this.birthYear;
}
var john = new Person('john', 1990,'delhi');
console.log(john);
console.log(john.calcAge());

*/
//anthor method of creation of objects.
/*
var Person = function(name,city){
    this.name = name;
    this,city = city;
}
var john = Object.create(Person);
console.log(john);
john.name = 'john';
john.city = "mumbai";
console.log(john);
*/
//primitives values doesnot change..they make copies inside the function only.
/*
var a = 6;
function change(a){
   a = 7;
    console.log(a);
}
change(a);
console.log(a);
*/

//iifs
//it the private section of the code, so that the variables inside the code can not able to interact.
/*
(function(){
    var a = 5;
    console.log(a);
}());

console.log(a);
*/
/*
var a = 7;
(function(){
    var b = 9;
    //console.log(a); //7....we  can access the outside declared variables in iifs.
}());
console.log(b);
*/


var john = {
    name: 'john',
    city: 'delhi',
    birthYear : 1998,
    calcAge : function(){
        return 2020- this.birthYear; 
    }
}
    
var mike = {
    name : 'mike',
    city:'mumbai'
}   
console.log(john);
console.log(john.calcAge());
    
console.log(john.calcAge.call(mike));



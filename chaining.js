var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

document.getElementById("hi").innerHTML = 
`(integers.sort(function(a, b){return b-a;}).filter(function(a) {return a <19;})).map( function (b){return b*1.5-1}).reduce(function(a,b,c,d){ return a+b});<br>` 
+ (integers.sort(function(a, b){return b-a;}).filter(function(a) {return a <19;})).map( function (b){return b*1.5-1}).reduce(function(a,b,c,d){ return a+b});;


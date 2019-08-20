console.log("for");
for(var i=0; i<10; i++){
    console.log(i);
}

console.log("while");
var j=0;
while(j<10){
    console.log(j);
    j++;
}

console.log("do/while");
var k=0;
do {
    console.log(k);
    k++;
} while(k<10);

console.log("for/in");
var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (x in l){
    console.log(x);
}

console.log("brake/continue");
var m = 0;
while(true){
    console.log(m);
    m++;
    if(m==10) {
        break;
    } else {
        continue
    }
}

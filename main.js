
function challengeBanner(num){
    console.log('######### Challenge ' + num +' ' + '#########')  
    }


challengeBanner(2)
function print(num){
  num = 1;
    while(num <= 5){
        console.log(num)
            num = num + 1;
    }

}
print(6)

challengeBanner(3)
function firstTilLast(num, num2){
 while(num <= num2){
     console.log(num)
 
 num = num + 1;
}
 }
firstTilLast(3,7)


challengeBanner(4)
function evenOrOdd(x){
    let num = 1;
    while(num <= x ){
    console.log(num);
    num = num + 1;
    if(num % 2 === 0){
    console.log('Even');
    }else{ console.log('Odd') 
 }
   }
    }

 evenOrOdd(5)


challengeBanner(5)
function evenOnly(num){
    let num2 = 1;
        while (num2 <= num){  
    if(num2 % 2 === 0){
        console.log(num2);
 }
    num2 = num2 + 1;

}
}
evenOnly(11)

challengeBanner(6)
function descending(){
 num = 10;
    while (num >=1 ){
console.log(num)
num = num - 1;  
} 
}
descending()


challengeBanner(7)
function blastOff(){
descending() + console.log("Blast Off!")
}

blastOff()

challengeBanner(8)
function byThrees(n){
    
    
        while (n >= 1) {
        console.log(n);
        n = n- 3;
        }
}
byThrees(20)
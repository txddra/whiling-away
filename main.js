
function challengeBanner(num){
    console.log('######### Challenge ' + num +' ' + '#########')  
    }



challengeBanner(2)
print(6)
function print(num){
    num = 1;
        while(num <= 5){
            console.log(num)
                num = num + 1;
    }
}
// print(6)

challengeBanner(3)
function firstTilLast(num, num2){
    while(num <= num2){
        console.log(num)
            num = num + 1;
    }

}
// firstTilLast(3,7)


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


//String challenges
challengeBanner(9)
function printHello(num){
    num = 1;
        while (num <= 7){
            console.log(num + '. Hello!');
                num = num + 1;
}
}

printHello(7)


challengeBanner(10)
function printStr(str){;
    num = 1
        while(num <= 7){
            console.log(str)
                num = num + 1
    }
}
printStr("boom")


challengeBanner(11)
function repeatX(str, numb){
    let num = 1;
        while (num <= numb){
            console.log(str);
                num = num + 1 
        }
    
}

repeatX('Goodbye...',4)
repeatX('Get out!',6)


challengeBanner(12)
function individually(str){
    let i = 0;
        while(i < str.length){
            console.log(str[i]);
                i = i + 1;
    }
}

individually("think")

challengeBanner(13)
function everyOther(str){
    let i = 0;
        while(i < str.length){
            if(i % 2 === 1){
                console.log(str[i])
            }
                    i = i + 1
    }
}

everyOther('nobody')


challengeBanner(14)
function backwards(str){
    let i = str.length - 1;
        while(i >= 0){
            console.log(str[i])
    i = i - 1

}
}
backwards("Mesuara")

challengeBanner(15)
function fizzbuzz(n){
    num = 1
    while (num <= n) {
        if (num % 15 === 0) {
            console.log('FizzBizz') 
            num = num + 1
        }
        else if (num % 3 === 0) {
            console.log('Fizz') 
            num = num + 1
        }
        else if (num % 5 === 0) {
            console.log('Buzz') 
            num = num + 1
        } else {
            console.log(num) 
            num = num + 1
        }    
    }  
}
fizzbuzz(15)


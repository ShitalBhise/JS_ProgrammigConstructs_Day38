let check = function(number: number)
{
    let originalNumber = number;
    let rem;
    let temp = 0 ;

    while (number > 0 ){
        rem = number % 10 ;
        temp =(temp*10) +rem;
        number = parseInt(number/10);
    
    }
    if (originalNumber == temp) {
        console.log("the number is planindrome number")
    
    } 
     else{
        console.log("number is not planindrome number");
    }
}
/* // Condition */
/* var num=541878451657654 */
/* if (num%2==0) { */
/*     console.log("The number is an Even Number") */
/* } else { */
/*     console.log("The number is an Odd Number") */
/* } */
/* // Operators */
/* var a=544 */
/* var b=++a */
/* var a=b-- */
/* var b=--a */
/* var a=b++ */
/* console.log("The value of a is",a) */
/* console.log("The value of b is",b) */
/* // ex */
/* var ab=100 */
/* var bc=--ab */
/* console.log(ab) */
/* console.log(bc) */
/* console.log(ab) */
/* pdata={ */
/*     fname:"Sureka", */
/*     Age:19, */
/*     DOB:19/2/2006, */
/*     Gender:"Female", */
/*     RegisterNumber:950623104098, */
/*     Department:"CSE", */
/* } */
/* console.log(pdata) */
function mark(m1,m2,m3){
    result=(m1+m2+m3)/3
    if(result>=90)
        console.log("Grade A")
    else if(result>=80)
        console.log("Grade B")
    else if(result>=70)
        console.log("Grade C")
    else if(result>=60)
        console.log("Grade D")
    else if(result>=50)
        console.log("Grade E")
    else 
        console.log("Fail")
}
mark(87,90,98)
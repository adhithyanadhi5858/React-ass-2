function validate() {

    let mark = document.getElementById("mark").value

    if(mark <=100 && mark >=90){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: A+"
    }
    else if(mark <=89 && mark >=80){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: A"
    }
    else if(mark <=79 && mark >=70){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: B+"
    }
    else if(mark <=69 && mark >=60){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: B"
    }
    else if(mark <=59 && mark >=50){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: C+"
    }
    else if(mark <=49 && mark >=40){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: C"
    }
    else if(mark <=39 && mark >=30){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: D+"
    }
    else if(mark <=29 && mark >=20){
        document.getElementById("result").innerHTML="You are passed Because of your mark is " + mark + " Grade: D"
    }else if(mark < 20 && mark >=0){
        document.getElementById("result").innerHTML="You are failed the exam Because of your mark is " + mark + " Grade: E"
 
    }else{
        document.getElementById("result").innerHTML="Mark not defind properly"

    }


}

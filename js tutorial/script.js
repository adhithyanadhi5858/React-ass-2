function validate(event){
    event
     let username=document.getElementById('username').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

     document.getElementById('head').innerHTML=username
     document.getElementById('para-1').innerHTML=email
     document.getElementById('para-2').innerHTML=password


    if(username.length <=2 && username.length >=1 || username.length >=10){
       alert("You ARE not safe  "+username)
     }else{
        
    }

}

//document.getElementById('sam').innerHTML="Yes I proove It"

let animal={}
animal.name="leo"
animal.energy=10

animal.eat = function (amount){
   console.log(`${this.name} is eating.`);
   this.energy += amount
}

animal.sleep = function (lenght){
   console.log(`${this.name} is sleeping.`);
   this.energy += length
}
animal.play = function (lenght){
   console.log(`${this.name} is playing.`);
   this.energy -= length;
}
console.log(animal)


let human ={}
human.iq=undefined
human.__proto__=animal

let btn=document.getElementById('btn')
btn.addEventListener('click',function(){

   debugger

   try {
      let val=document.getElementById('input-value').value
  
   if(value=="")throw 'cannot be blank'
   if(isNaN)throw 'it should be a number'
   console.log(val)
   } catch (error) {
      alert(error)
   }
   finally{
      alert('yes its over')
   }

   
})
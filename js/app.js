// //---------------------------------------------------------variables
// // var firstName , age;
// // firstName="mohamed";
// // age = 26;

// // var lastName = prompt('what is the last name ');
// // console.log(firstName, lastName)

// //----------------------------------------------------------Operators

// // var now =2020;
// // var yearBorn = 1994;
// // var fullAge =26;
// // var isFullAge = now - yearBorn < fullAge;
// // // console.log(isFullAge);
// // var firstName = 'john';
// // var age = 16;

// // if (age <13){
// //    console.log('john is a teen.');
// // } else if (age >=13 && age < 30){
// //     console.log('john is a man.');
// // } else if (age === 13){
// //    console.log('john is a boy')
// // }
// //AND = (&&) , OR = (||) ,NOT = (!)
// // Ternary OPerator

// // var firstName = 'john';
// // var  age = 18;

// // age != 20 ? console.log(firstName +''+ 'drinks juice')
// // : console.log(firstName +''+ 'drinks beer');

// // var drink = age <=
// //  20 ? 'juice' : 'beer';
// // console.log(drink);

// // //Switch Statement

// // var job ='programer';
// // var firstName = 'john';

// //  function oddNumbers(){
// //        return (result);
// //  }

// //  if (result=== 0){
// //    console.log( oddNumbers() + ' '+'is an even number ');
// //  }else if (result!=0){
// //     console.log(result +''+'is an odd number');
// //  }else{
// //    console.log('Nothing here ;)')};
// // for loop

// // for(index =1 ; index <=10 ; index++){
// //    console.log(`${index} : Hello there`);
// // }

// // stars patterns

// // for(i=0 ; i<=7 ; i++){
// //    for(j=0 ; j<i ; j++){
// //       document.write('*')
// //    }
// //    document.write("<br>")
// // }

// // For... in

// // let person={
// //    name:'Ahmed',
// //    age:26
// // }
// // for(let p in person){
// //    console.log(p);
// //    console.log(person[p]);
// // }

// // For ..... Of
// // let ages = [20,30,40];

// // for(let a of ages){
// //    console.log(a);

// // While Loop

// // let ages=20;
// // while(ages <=20){
// //   console.log('Older');
// //   ages++;
// // }
// // do{console.log(ages);
// //   ages++;}while(ages<10);

// // for (let i = 0; i <= 20; i++) {
// //   console.log(i);
// // }
// for(var i=1; i<=4; i++){
 //  console.log("*".repeat(i));
//   }

// // let SomBody = {
// //   name: "Ahmed",
// //   age: 26,
// //   address: "25 tahrir square",
// // };

// // for (let som in SomBody) {
// //   console.log(SomBody);
// // }

// // let address = ['21 st tahrir', 20, 30];
// // for (let add in address) {
// //   console.log(add)
// // }

// // let namePerson = 'ahmed';
// // switch (namePerson) {
// //   case (namePerson = 'ahmed'):
// //     console.log(`he is ${namePerson}`);
// //     document.write(`${namePerson}`)
// //   default:
// // }


// // for (i = 0; i <= 5; i++) {
// //   for (j = 0; j < i; j++) {
// //     document.write('&');
// //   }
// //   document.write('<br>');
// // }
// // for (i = 0; i <= 7; i++) {
// //   for (j = 0; j < i; j++) {
// //     document.write('*')
// //   }
// //   document.write("<br>")
// // }


// // let address = {
// //   name: 'ahmed',
// //   age: 20
// // }
// // for(let data in address ){
// //   console.log(data,address);
// // }



// // let adrry =[20,30];
// // for (let details of adrry){
// //   console.log(details)
// // }

// // for (i = 0 ; i < 10 ; i++){
// //    for(j = 0 ; j < i ; j++){
// //      for(k = 0 ; k < j ; k++){
// //       document.write('');
// //      }
// //    }
// //    document.write('<br>');
// // }

// // let drink = age >= 18 ? 'beer' : 'juice';
// // console.log(drink);


// // if(age >= 18){
// //    console.log('beer');

// // }else{
// //    console.log('another juice ');
// // // }
// // age>= 20? console.log('beer'):console.log('tomato');

// // var job = 'pro';

// // switch(job){
// //    case  job = 'tech':
// //       console.log("he is a teacher");
// //       break;
// //    case job = 'pro':
// //       console.log('he is a programmer');
// //       break;
// //    default:
// // }




// //   Functions 
// /**
//  * Regular Function 
//  */
// //  function calcAge(birthDate , currentDate ){
// //     return currentDate - birthDate;
// //  }
// // let result = calcAge(1994 , 2021);
// // console.log(result);
 
// // Arro Function 

// // let calcAge = (birthDate)=> 2021-birthDate;
// // console.log(calcAge(1994));

// // Function expression 

// // var wahtIsJob = function (job , firstName){
// //    switch(job){
// //       case 'teacher':
// //          return firstName + ' he is teacher';
// //       case 'pro':
// //          return firstName + ' he is programmer';
// //       default :
// //          return firstName + ' he is something else';
// //    }
// // }
// // console.log(wahtIsJob('teacher','john'));
// // // wahtIsJob('tech ', 'mohamed');

// //  Arrays


// // var names =['ahmed', 'mohamed','ali'];
// // var ages = new Array(23,26,28);

// // // mUTATE array = assign new value to it 


// // names[0]='ibram';
// // names[names.indexOf]=3;
// // console.table(names);


// // ARRAY With Ternary Operator 

// // var listArras = ['ahmed','moahmed',25];

// // // var result = listArras.indexOf('ahmed')=== 0? 'he is here':'he is not here';
// // // console.log(result);



// // listArras.push('ali');

// // console.log(listArras);

// // function tipCalculator(bill) {
// //    var presentage;
// //    if (bill < 50) {
// //       presentage = .2;
// //    } else if (bill >= 50 && bill < 200) {
// //       presentage = .15;
// //    } else {
// //       presentage = .1;
// //    }
// //    return presentage * bill;
// // }
// // console.log(tipCalculator(100));

// // var bills = [124, 48, 268];
// // var tips = [tipCalculator(bills[0]),
// //    tipCalculator(bills[1]),
// //    tipCalculator(bills[2])
// // ];
// // console.log(tips);


// // Objects
// //  var mohamed = {
// //      firstName : 'mohamed',
// //      lastName : 'AWWAD',
// //      id :12,
// //      birthyear:1994,
// //      family :['ali','aza','hager'],
// //      negbour :['ibrahim','emad'],
// //      calcAge : function (){     // Called Function Expresssion Here
// //        return 2021 - this.birthyear;
// //      }
// //  }; 
// //  console.log(mohamed.calcAge());


 
// //For Loop 
// var john = ['john' , 'mohamed','ahmed'];

// // for (var i = 0 ; i <john.length; i++){
// //    console.log(john[i]);}

// // while  // LOoping Backwards
// var i = john.length -1;
// while (i >= 0){
//    console.log(john[i]);
//    i--;
// }




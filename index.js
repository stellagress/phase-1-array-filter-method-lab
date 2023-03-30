// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, str){
    return arr.filter(function(value){
        return value.toUpperCase() === str.toUpperCase();
    })
}



// function fuzzyMatch(arr, str){
//     return arr.filter(function(value){
//         return value.toLowerCase().includes(str.toLowerCase()) })
// }



// function fuzzyMatch(arr, str){
//     return arr.filter(function(value){

//         if(str.charAt(0) === value.charAt(0)){
//           return value
//         }
//     })
// }



function fuzzyMatch(arr, str){
    return arr.filter(function(value){
        return str.charAt(0) === value.charAt(0)
        
        
    })
}





function matchName(arr, str){

    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
      
    return arr.filter(function (value){ 
        return value.name  === str
    })
}








// function findMatching(arr, str) { 
//     return arr.filter(function(name){
//         return name.toLowerCase() === str.toLowerCase()
//     })
// }






































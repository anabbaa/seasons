const monthtocheck = (str)=>{
    
let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  const curr = (monthname)=>{
      let ses = months.indexOf(monthname);
      if (ses == 0 || ses == 1 || ses == 2){
          return seasons[0];
      }
      else if ( ses == 3 || ses == 4 || ses == 5 ){
          return seasons[1]
      }
      else if(ses == 6 || ses == 7|| ses == 8){
          return seasons[2]
      }
      else if(ses == 9 || ses == 10 || ses == 11){
          return seasons|[3]
      }
  }
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
let month = str.toLowerCase().split(" ").filter
((word)=> months.includes(word)).join("");
return month == "" ? `sorry`:
`you have entred ${month} which is ${curr(month)}`
}
console.log(monthtocheck("I love december"));



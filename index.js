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
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const cur = (monthname)=>{
   switch (months.indexOf(monthname))
      {
          case 0:
          case 1:
          case 2:
        return seasons[0];
        case 3:
         case 4:
         case 5:
         return seasons[1];
     case 6:
     case 7:
    case 8:
   return seasons[2];
    case 9:
    case 10:
    case 11:
    return seasons[3];
      }
      
};
  let month = str.toLowerCase().split(" ").filter
  ((word)=> months.includes(word)).join("");
  
  return month == "" ? `sorry`: 
  `you have entred ${month} which is ${cur(month)}`;

};
console.log(monthtocheck("I love december"));



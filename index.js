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
  let seasons = ["winter", "spring", "summer", "autumn"];
  const curr = (monthname)=>{
      return seasons[Math.floor(months.indexOf(monthname) / 3)];
  }
let month = str.toLowerCase().split(" ").filter
((word) => months.includes(word)).join(" ");
console.log(month);
return  month = "" ? `sorry`:
`you have entred ${month}, which is ${curr(month)}`;
}
console.log(monthtocheck("i love june"))
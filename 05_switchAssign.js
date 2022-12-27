
 function monthOfYear(monthNum) {
  
  switch (monthNum) {
    case 1:
      console.log(`${monthNum} : month is January`);
      break;
    case 2:
      console.log(`${monthNum} :month is February`);
      break;
    case 3:
      console.log(`${monthNum} : month is march`);
      break;
    case 4:
      console.log(` ${monthNum} :month is april `);
      break;
    case 5:
      console.log(`${monthNum} :month is may`);
      break;
    case 6:
      console.log(`${monthNum} :month is june`);
      break;
    case 7:
      console.log(`${monthNum} :month is july`);
      break;
      case 8:
      console.log(`${monthNum} : month is August`);
      break;
    case 9:
      console.log(`${monthNum} : month is September `);
      break;
    case 10:
      console.log(`${monthNum} : month is octumber`);
      break;
     case 11:
      console.log(`${monthNum} : month is november`);
      break;
    case 12:
      console.log(`${monthNum} : month is december`);
      break;
  
    default:
      console.log(`${monthNum} : Not valid value provided`);
      break;
  }


}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);



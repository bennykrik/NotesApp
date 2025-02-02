export const timeCreater = () => {
  let hours = zeroHelper(new Date().getHours());
  let minutes = zeroHelper(new Date().getMinutes());
  let day = zeroHelper(new Date().getDate());
  let month = getMonthName(new Date().getMonth());

  return `${day} ${month} - ${hours}:${minutes} `;
};

function zeroHelper(num: number): string {
  if (num < 10) {
    return `0${num}`;
  } else {
    return String(num);
  }
}

function getMonthName(num: number): string {
  switch (num) {
    case 0: {
      return "January";
    }
    case 1: {
      return "February";
    }
    case 2: {
      return "March";
    }
    case 3: {
      return "April";
    }
    case 4: {
      return "May";
    }
    case 5: {
      return "June";
    }
    case 6: {
      return "July";
    }
    case 7: {
      return "August";
    }
    case 8: {
      return "September";
    }
    case 9: {
      return "October";
    }
    case 10: {
      return "November";
    }
    case 11: {
      return "December";
    }
    default: {
      return "smtWrong";
    }
  }
}

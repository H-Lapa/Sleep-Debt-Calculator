const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 3.5;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 10;
      break;
    case 'saturday':
      return 4.5;
      break;
    case 'sunday':
      return 9;
      break;
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  var idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    var debt = actualSleepHours - idealSleepHours
    console.log(`You got ${debt} hours more sleep than needed!`);
  } else {
    var debt = idealSleepHours - actualSleepHours
    console.log(`You should get ${debt} hours more rest!`);
  }
}

calculateSleepDebt();

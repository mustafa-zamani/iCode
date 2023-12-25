let day = prompt('Enter your desired day of the week');
switch (day) {
  case 'Monday':
    console.log('plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare theory videos');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('write code example');
    break;
  case 'Friday':
    console.log('Record videos');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid input');
}

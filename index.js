function scuberGreetingForFeet(distance){
  let response;
  if (distance > 0 && distance <= 400) {
    response = 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500 ) {
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(city) {
  const destination = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return destination;
}

function switchOnCharmFromTip(tip){
  
  let charm;
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    case 'thanks for everything':
      charm = 'Bye.';
  }
  return charm
}

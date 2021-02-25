var data = new Date();
var hr = data.getHours();

switch (hr) {
    case 12:
        console.log('Hora do almoço!');
        break
    case 22:
        console.log('Hora de dormir!');
        break
    case 6:
        console.log('Hora de acordar!');
        break
    default:
        console.log('Hora de trabalhar!');
        break
  }
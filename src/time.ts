import moment from 'moment';

export default function createClock() {
  renderClock()
  setInterval(renderClock, 1000)
}

function renderClock() {
  let hour = document.getElementById('hour')
  let minutes = document.getElementById('minutes')
  let seconds = document.getElementById('seconds')
  let month = document.getElementById('month')
  let day = document.getElementById('day')
  hour!.innerHTML = moment().format('h');
  minutes!.innerHTML = moment().format('mm');
  seconds!.innerHTML = moment().format('ss');
  month!.innerHTML = moment().format('MMM');
  day!.innerHTML = moment().format('Do');
}
//
// window.onload = displayClock();
// function displayClock() {
//     const monthNames = [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//     ];
//
//     var d = new Date();
//     var mm = monthNames[d.getMonth()];
//     var dd = d.getDate();
//     var min = (mins = ('0' + d.getMinutes()).slice(-2));
//     var hh = d.getHours();
//
//     document.getElementById('hour').innerText = hh;
//     document.getElementById('separator').innerHTML = ' : ';
//     document.getElementById('minutes').innerText = min;
//
//     document.getElementById('month').innerText = mm;
//     document.getElementById('day').innerText = dd;
//
//     setTimeout(displayClock, 1000);
// }

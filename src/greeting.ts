var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'James';
var lateTxt = 'Go to Sleep! ';
var morningTxt = 'Good morning! ';
var afterTxt = 'Good afternoon ';
var evenTxt = 'Good evening ';

export default function setMessage() {
  const message = document.getElementById('greetings')
  if (message == null) return
  if (Hr >= 0 && Hr < 6) {
    message.innerText = lateTxt + name;
  } else if (Hr >= 6 && Hr < 12) {
    message.innerText = morningTxt + name;
  } else if (Hr >= 12 && Hr < 17) {
    message.innerText = afterTxt + name;
  } else {
    message.innerText = evenTxt + name;
  }
}


const button = document.getElementById('button');
const poruke = document.getElementById('poruke');

const messages = [
  'Message One 01',
  'Message Two 02',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('jednaPoruka');
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  poruke.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 6000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

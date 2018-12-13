let newPerson = 0;
const regexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function registration(firstName, lastName, emailAdrees, password) {

  if (!firstName || !lastName || !emailAdrees || !password) {
    alert('Forms are not Filled');
    return;
  };
  if (!regexp.test(emailAdrees)) {
    alert('Incorect Email!');
    return;
  };
  let userData = data();
  let gender = 0;
  if (document.querySelector('input[name = \'gender\']:checked')) {
    gender = document.querySelector('input[name = \'gender\']:checked').value;
  };
  let mainInform = [firstName, lastName, emailAdrees, password];
  console.log(mainInform);
  class Person {
    constructor(mainInform, userData, gender) {
      this.userInformation = mainInform;
      this.userData = userData;
      this.gender = gender;
      this.name = mainInform[0];
    }
  };
  newPerson = new Person(mainInform, userData, gender);
  newPerson = new Proxy(newPerson, {
    deleteProperty(target, prop) {
      return true;
    },
    set(target, prop, value) {
      alert('!');
      target[prop] = value;
    }
  });
  console.dir(newPerson);
  alert('Registration completed successfully!');
  let inputs = document.getElementsByName('nameSurn')[0].value;
};

function data() {
  let d = document.getElementById('Day');
  let m = document.getElementById('Months');
  let y = document.getElementById('Yers');
  let day = d.options[d.selectedIndex].value;
  let month = m.options[m.selectedIndex].value;
  let year = y.options[y.selectedIndex].value;
  return [day, month, year];
};

function logIn(email, password) {
  if (!email || !password) {
    alert('Forms are not Filled');
    return;
  };
  if (!regexp.test(email)) {
    alert('Incorrect Email!');
    return;
  };
  if (!newPerson) {
    alert('you must create new account before log in');
    return;
  };
  if (email === newPerson.userInformation[2] && password === newPerson.userInformation[3]) {
    alert('Welcome');
  } else {
    alert('Login or Password is incorrect');
  };
};
const q1 = document.getElementById('q-1');
const q2 = document.getElementById('q-2');
const q3 = document.getElementById('q-3');
const q4 = document.getElementById('q-4');
const q5 = document.getElementById('q-5');
const q6 = document.getElementById('q-6');
const q7 = document.getElementById('q-7');
const q8 = document.getElementById('q-8');
const q9 = document.getElementById('q-9');
const q10 = document.getElementById('q-10');

const image = document.getElementById('image-link');
const photo = document.getElementById('enter-name');
const submit = document.getElementById('submit-form');

const q2A = q2.options[q2.selectedIndex].value;
const q1A = q1.options[q1.selectedIndex].value;
const q3A = q3.options[q3.selectedIndex].value;
const q4A = q4.options[q3.selectedIndex].value;
const q5A = q5.options[q5.selectedIndex].value;
const q6A = q6.options[q6.selectedIndex].value;
const q7A = q7.options[q7.selectedIndex].value;
const q8A = q8.options[q8.selectedIndex].value;
const q9A = q9.options[q9.selectedIndex].value;
const q10A = q10.options[q10.selectedIndex].value;

submit.onclick = function() {
  const user = { name, photo, scores: [q1A, q2A, q3A, q4A, q5A, q6A, q7A, q8A, q9A, q10A] };

  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status !== 200) {
        console.log(httpRequest.responseText);
      }
    }
  };
  httpRequest.open('POST', '/api/friends', true);
  httpRequest.send(user);
};

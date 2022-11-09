const emailInput = document.getElementById('emailInput');
const subjectInput = document.getElementById('subjectInput');
const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');


const redirect = () => {
    window.location.replace('/');
}

const handleSubmit = (e) => {
  e.preventDefault();

  const inputs = {
    email: emailInput.value,
    subject: subjectInput.value,
    message: textInput.value,
  };
  console.log(inputs);

  axios({
    method: 'POST',
    url: 'https://formbold.com/s/3GXPo',
    data: inputs,
  })
    .then((r) => {
      console.log('Your message has been submitted!');
      emailInput.value = '';
      subjectInput.value = '';
      textInput.value = 'Your message has been submitted!';
      textInput.style.color = 'rgba(245, 245, 245, 255)';
      textInput.style.fontSize = '1.2rem';
    })
    .catch((r) => {
      console.log('error');
    });

  setTimeout(redirect, 5000);
};

submitBtn.addEventListener('click', handleSubmit);

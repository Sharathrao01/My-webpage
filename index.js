
var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-contents"); // capital 'L' for classList
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-contents");


}

/* <script> */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwqkssHcbvHprmMFRoyZdLLyHeWLLGMXWIPhs5s2KG7r_RLtqfDXRKUjtqn9OLDd7_4/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// </script>
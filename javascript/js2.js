var click = 0;
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let submit = document.getElementById('submit')
submit.addEventListener("click",function(){
  if(click==1){
    window.location.href= "select.html";
  }
  else{
    user.style.color ="red";
    pass.style.color ="red";
    submit.style.backgroundColor ="red";
    click = 1;

  }
});

let arrow = document.getElementById('arrow');
arrow.addEventListener('click',function(){
  window.location.href= "index.html";

});

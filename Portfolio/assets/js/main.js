function navmob(){
  var hamMenu=document.getElementById('nav-bar')
      if (hamMenu.style.display==="block"){
          hamMenu.style.display="none";
      }
      else{
          hamMenu.style.display="block";
      }
  }

function navClose(){
  var close=document.getElementById('nav-bar')
  close.style.display="none"
}

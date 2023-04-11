//Show Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

      if(toggle && nav){
        toggle.addEventListener('click' , () =>{
            nav.classList.toggle('show')
        });
      }
}

showMenu('nav_toggle','nav_menu')

//Active & remove active
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){

  navLink.forEach(n =>n,classList.remove('active'))
  this.classList.add('active')

}

navLink.forEach(n => n.addEventListener('click', linkAction))



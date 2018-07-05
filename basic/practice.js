var mediaquery = window.matchMedia("(max-width: 800px)");


//menuitem 클릭 시 clicked 클래스 추가하기
var menuitems = document.getElementsByClassName('element');
var menuitemClicked = function() {
  for(var j=0;j<menuitems.length;j++){
    menuitems[j].className = "element";
  }
  this.className = "element clicked";
};

for(var i=0;i<menuitems.length;i++) {
  console.log("hello!");
  menuitems[i].addEventListener('click', menuitemClicked, false);
};

//apps 버튼 클릭 시 nav 보이기, 숨기기
var apps = document.getElementById('apps');
var navmenu = document.getElementsByClassName('navmenu');
var appsClicked = function() {
  if(navmenu[0].style.display != 'none'){
    navmenu[0].style.display = 'none';
  }
  else{
    navmenu[0].style.display = 'block';
  }

};
apps.addEventListener('click', appsClicked, false);

//navmenu hover시 scrollbar 보이기



//Mobile device에서 navmenu over되도록
function navmenuOver() {
  if(mediaquery.matches) {

  }
}

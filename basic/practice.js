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
  else{ //navmenu 슬라이딩
    if(mediaquery.matches) {
      navmenu[0].style.position = 'fixed';
      navmenu[0].style.top = 40;
      navmenu[0].style.display = 'block';
      var pos = 0;
      var id = setInterval(frame, 10);
      if(pos == 100) {
        clearInterval(id);
      } else {
        pos++;
        navmenu[0].style.left = pos + 'px';
      }
    }
    else {
      navmenu[0].style.position = 'static';
      navmenu[0].style.display = 'block';
    }



  }

};
apps.addEventListener('click', appsClicked, false);

//navmenu hover시 scrollbar 보이기



//Mobile device에서 navmenu over되도록
function navmenuOver() {
  if(mediaquery.matches) {

  }
}

//돋보기 버튼 누르면 검색 창 활성화
var searchsample = document.getElementById('searchsample');
var searchwindow = document.getElementsByClassName('topmenu-search')[0];
var topmenuLeft = document.getElementsByClassName('topmenu-left')[0];
var topmenuRight = document.getElementsByClassName('topmenu-right')[0];
var searchexpand = function() {
  searchsample.style.display = 'none';
  topmenuLeft.style.display = 'none';
  topmenuRight.style.display = 'none';
  searchwindow.style.display = 'flex';
}
searchsample.addEventListener('click', searchexpand, false);

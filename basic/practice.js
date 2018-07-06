var mediaquery = window.matchMedia("(max-width: 800px)");


//menuitem 클릭 시 clicked 클래스 추가하기
var menuitems = document.getElementsByClassName('element');
var menuitemClicked = function() {
  for(var j=0;j<menuitems.length;j++) {
    menuitems[j].className = "element";
  }
  this.className = "element clicked";
};

for(var i=0;i<menuitems.length;i++) {
  console.log("hello!");
  menuitems[i].addEventListener('click', menuitemClicked, false);
}

//apps 버튼 클릭 시 nav 보이기, 숨기기
var apps = document.getElementsByClassName('apps');
var navmenu = document.getElementsByClassName('navmenu');
var mobileNavBody = document.getElementById('mobile');
var navmenuMobile = document.getElementById('navmenu-mobile');

var appsClicked = function(){
  if(mediaquery.matches) { //mobile
    if(mobileNavBody.style.display == 'flex'){
      mobileNavBody.style.display = 'none';
    }
    else {
      mobileNavBody.style.display = 'flex';
      var pos = -240;
      var id = setInterval(frame, 5);
      function frame(){
        if(pos == 0) {
          clearInterval(id);
        } else {
          pos++;
          mobileNavBody.style.left = pos + 'px';
        }
      }
    }
    if(navmenu[0].style.display != 'none') {
      navmenu[0].style.display = 'none';
    }

  } else { //Desktop
    if(navmenu[0].style.display != 'none') {
      navmenu[0].style.display = 'none';
    } else {
      navmenu[0].style.display = 'block';
    }
  }
};
apps[0].addEventListener('click', appsClicked, false);
apps[1].addEventListener('click', appsClicked, false);

//mobile에서 검은화면 누르면 navbar 꺼지기
var mobileBody = document.getElementById('mobile-body');
var mobileBodyClicked = function(){
  mobileNavBody.style.display = 'none';
};
mobileBody.addEventListener('click', mobileBodyClicked, false);



//navmenu hover시 scrollbar 보이기


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
};
searchsample.addEventListener('click', searchexpand, false);

/*! */
W.define("NearestWebcams",["Webcams","utils","rootScope","broadcast"],function(t,e,s,n){return t.extend({maxAmount:7,toOpen:s.isMobile?"webcam":"detail-webcams",_init:function(){var t=this;this.firstLaunch=!0,this.latestParams=null,this.webcamsEl.onclick=function(){return n.emit("rqstOpen",t.toOpen,t.latestParams)}},getThumb:function(t){return t&&t.image&&t.image.daylight.thumbnail},close:function(){clearInterval(this.timer),this.webcamsEl.classList.remove("show"),this.latestParams=null},render:function(){var n=this,a=document.createDocumentFragment(),t=this.data.length,i=function(){return!--t&&n.onLoaded(a)};this.data.forEach(function(t){var e=new Image;s.isMobile&&a.appendChild(e),e.onload=i,e.onerror=i,e.src=n.getThumb(t)})},onLoaded:function(){var e=this,n=this.data.length,a=0;clearInterval(this.timer),n&&(this.timer=setInterval(function(){var t=e.data[a];e.webcamsImg.style.backgroundImage="url('"+e.getThumb(t)+"')",n<=++a&&(a=0)},3e3),this.webcamsImg.style.backgroundImage="url('"+this.getThumb(this.data[0])+"')",this.webcamsEl.classList.add("show"),s.isMobile&&this.firstLaunch&&(setTimeout(function(){e.webcamsImg.nextSibling.textContent=""},5e3),this.firstLaunch=!1))},load:function(t){}})}),
/*! */
W.define("nearestStations",["rootScope","utils","http","overlays","broadcast","map","ClickHandler"],function(t,e,n,a,i,s,r){return function(t){var e=t.el;return t.container,r.instance({el:e,marker:null,stopPropagation:!0,click:function(t,e,n){i.emit("rqstClose","detail"),i.emit("rqstOpen","station",{id:n,source:"nearest-stations"})}}),function(t,e){}}});
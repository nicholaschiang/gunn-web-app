window.addEventListener("load",e=>{
  var staff,
  stafflist=document.querySelector('#staff'),
  staffcontact=document.querySelector('#staffcontact'),
  staffh1=document.querySelector('#staffcontact h1'),
  staffcontent=document.querySelector('#staffcontact .content'),
  staffsearch=document.querySelector('#staffsearch'),
  staffstyle=document.createElement("style");
  document.body.appendChild(staffstyle);
  ajax(
    (window.location.protocol==='file:'?"https://orbiit.github.io/gunn-web-app/":"")+'staff.json',
    e=>{
      staff=JSON.parse(e);
      staff["Nick Mount"]={game:true,jobTitle:"Easter Bunny",department:"Easter"};
      staff["Josh Paley"].jobTitle="Blamed Teacher";
      var staffnames=Object.keys(staff).sort((a,b)=>a[a.lastIndexOf(' ')+1].charCodeAt()-b[b.lastIndexOf(' ')+1].charCodeAt()),
      innerHTML=``;
      for (var i=0,arr=staffnames,len=arr.length,person=arr[i];i<len;i++,person=arr[i]) {
        innerHTML+=`<li data-person="${person}"><span class="primary">${person}</span><span class="secondary">${staff[person].jobTitle}</span><span class="secondary">${staff[person].department}</span></li>`;
      }
      stafflist.innerHTML=innerHTML;
      ripple('#staff li');
    },
    e=>{
      stafflist.innerHTML=`<li class="error">${e}; either you aren't connected to the internet or you should try reloading.</li>`;
    }
  );
  stafflist.addEventListener("click",e=>{
    var target=e.target;
    if (target.tagName==='SPAN') target=target.parentNode;
    if (target.tagName==='LI'&&!target.classList.contains('error')) {
      staffcontact.classList.add('show');
      var person=target.dataset.person;
      staffh1.innerHTML=person;
      if (staff[person].game) {
        staffcontent.innerHTML=`<p>I hope to have a game here one day</p>`;
      } else {
        staffcontent.innerHTML=`<p><strong>Title</strong> ${staff[person].jobTitle}</p>${staff[person].department?`<p><strong>Department</strong> ${staff[person].department}</p>`:''}<p><strong>Email</strong> <a href="mailto:${staff[person].email}" target="_blank" rel="noopener noreferrer">${staff[person].email}</a></p><p><strong>Phone</strong> ${staff[person].phone}</p>${staff[person].webpage?`<p><strong>Website</strong> <a href="${staff[person].webpage}" target="_blank" rel="noopener noreferrer">${staff[person].webpage}</a></p>`:''}`;
      }
    }
  },false);
  document.querySelector('#staffcontact button').addEventListener("click",e=>{
    staffcontact.classList.remove('show');
  },false);
  staffsearch.addEventListener("input",e=>{
    staffstyle.innerHTML=staffsearch.value?`#staff li:not([data-person*="${staffsearch.value}"i]){display:none}`:'';
  },false);
  var clubs,
  clublist=document.querySelector('#clubs'),
  clubinfo=document.querySelector('#clubinfo'),
  clubh1=document.querySelector('#clubinfo h1'),
  clubcontent=document.querySelector('#clubinfo .content'),
  clubsearch=document.querySelector('#clubsearch'),
  clubstyle=document.createElement("style");
  document.body.appendChild(clubstyle);
  ajax(
    (window.location.protocol==='file:'?"https://orbiit.github.io/gunn-web-app/":"")+'clubs.json',
    e=>{
      clubs=JSON.parse(e);
      var clubnames=Object.keys(clubs).sort(),
      innerHTML=``;
      for (var i=0,arr=clubnames,len=arr.length,club=arr[i];i<len;i++,club=arr[i]) {
        innerHTML+=`<li data-club="${club}"><span class="primary">${club}</span><span class="secondary">${clubs[club].room}</span><span class="secondary">${clubs[club].day}</span></li>`;
      }
      clublist.innerHTML=innerHTML;
      ripple('#clubs li');
    },
    e=>{
      clublist.innerHTML=`<li class="error">${e}; either you aren't connected to the internet or you should try reloading.</li>`;
    }
  );
  clublist.addEventListener("click",e=>{
    var target=e.target;
    if (target.tagName==='SPAN') target=target.parentNode;
    if (target.tagName==='LI'&&!target.classList.contains('error')) {
      clubinfo.classList.add('show');
      var club=target.dataset.club;
      clubh1.innerHTML=club;
      clubcontent.innerHTML=`<p><strong>Meeting day</strong> ${clubs[club].day}</p><p><strong>Meeting time</strong> ${clubs[club].time}</p><p><strong>Location</strong> ${clubs[club].room}</p><p><strong>Description</strong> ${clubs[club].desc}</p><p><strong>President(s)</strong> ${clubs[club].president}</p><p><strong>Teacher Advisor(s)</strong> ${clubs[club].teacher}</p><p><strong>Email</strong> <a href="mailto:${clubs[club].email}" target="_blank" rel="noopener noreferrer">${clubs[club].email}</a></p>`;
      var s=clubcontent.querySelectorAll('a:not([href])');
      for (var i=0;i<s.length;i++) s[i].href=s[i].textContent,s[i].setAttribute('target',"_blank"),s[i].setAttribute('rel',"noopener noreferrer");
    }
  },false);
  document.querySelector('#clubinfo button').addEventListener("click",e=>{
    clubinfo.classList.remove('show');
  },false);
  clubsearch.addEventListener("input",e=>{
    clubstyle.innerHTML=clubsearch.value?`#clubs li:not([data-club*="${clubsearch.value}"i]){display:none}`:'';
  },false);
},false);
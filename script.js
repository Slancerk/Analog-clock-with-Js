setInterval(()=>{
 d= new Date();
 htime= d.getHours()
 mtime=d.getMinutes()
 stime= d.getSeconds()

 hrotaion= 30*htime + mtime/2;
 mrotaion= 6* mtime;
 srotation=6 * stime;

 hour.style.transform=`rotate(${hrotaion}deg)`
 minute.style.transform=`rotate(${mrotaion}deg)`
 second.style.transform=`rotate(${srotation}deg)`

},1000);
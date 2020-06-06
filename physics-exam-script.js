function timer(n){//n is count down time in min
    var currentTime=Date.parse(new Date());
    var deadline=currentTime+n*60*1000;
    var name=localStorage.getItem("name");
     function inner(){
     var currentTime=Date.parse(new Date());
     var RemainingTime=deadline-currentTime;
     var RemainingMin=Math.floor(RemainingTime/(60*1000));
      (RemainingMin<10)?RemainingMin="0"+RemainingMin:RemainingMin=RemainingMin;
     var RemainingSec = Math.floor((RemainingTime%(60*1000))/1000);
     (RemainingSec<10)? RemainingSec="0"+RemainingSec:RemainingSec=RemainingSec;
     document.getElementById("time").innerHTML="Candidates <br> Name: <br>"+name+"<p> </p><p></p>Remaiming <br>Time :<br>"+RemainingMin+":"+RemainingSec;
     }
     setInterval(inner, 100);
    }
    
    function ans(){
         var count=0;
            var failed=[ ];
         //var correct=document.querySelectorAll(".cb"); 
         var correct=document.getElementsByClassName("cb");
        for(i=0; i< correct.length; i++ ){
         if(correct[i].checked==true){
         count+=1;
         }
         else{count=count; failed.push(i+1);}
        }
       score="You got "+count+" questions correctly. <br> You failed question(s) <br>"+failed;
     //  result.innerHTML=score;
             localStorage.setItem("score",score);   
             window.open("Result page.html", "_self");   }
     function duration(min){
    window.onload=setTimeout(ans, min*60000);
    window.onload=timer(min);
    if (window.performance.navigation.type == 1){
    window.open("Homepage.html", "_self")
    }//this checks for reload and goes back to homepage
    }
    
    
    
    
    
    
    
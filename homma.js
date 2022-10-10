function button() {
    document.getElementById("activityButton").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
      var dropdowns = document.getElementsByClassName("activity_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function setDate(){
    day = prompt('For which day you want to add hours?\nYou can use abbreviation.')
    return day
  }
  function setHours(){
    
    hours = prompt('Input your hours please:')
    hours = parseFloat(hours);
    
    if(isNaN(hours) || hours < 0){
      alert("Incorrect input!");
      
    }else {
      alert("Thank you!");
      return hours
    }
    }
  
  var totalworkhours = 0;
  function setWork(){
    
    date = setDate()
    
    if (date == "monday"||date == "mon"){
     workmon = document.getElementById("work_mon").innerHTML = setHours()
     totalworkhours += workmon;
    
    } else if(day == "tuesday"|| date == "tue"){
      worktue = document.getElementById("work_tue").innerHTML = setHours()
      totalworkhours += worktue;
      
    } else if(day == "wednesday"|| date == "wed"){
      workwed = document.getElementById("work_wed").innerHTML = setHours()
      totalworkhours += workwed;

    } else if(day == "thursday"|| day == "thu"){
      workthu = document.getElementById("work_thu").innerHTML = setHours()
      totalworkhours += workthu;
    
    } else if( day== "friday"||day == "fri"){
      workfri = document.getElementById("work_fri").innerHTML = setHours()
      totalworkhours += workfri;

    } else if(day == "saturday"|| day == "sat"){
      worksat = document.getElementById("work_sat").innerHTML = setHours()
      totalworkhours += worksat;
      
    } else if(day == "sunday"|| day == "sun"){
      worksun = document.getElementById("work_sun").innerHTML = setHours()
      totalworkhours += worksun;
    
    } else{
      alert("Incorrect input!")
    }
    console.log(totalworkhours)
    document.getElementById("worktotal").innerHTML = totalworkhours;
    return totalworkhours;
    

  }
   
  totalstudyhours = 0 
  function setStudies(){
    
    date = setDate()
    
    if (date == "monday"||date == "mon"){
     studymon = document.getElementById("study_mon").innerHTML = setHours()
     totalstudyhours += studymon;
    
    } else if(day == "tuesday"|| date == "tue"){
      studytue = document.getElementById("study_tue").innerHTML = setHours()
      totalstudyhours += studytue;
    
    } else if(day == "wednesday"|| date == "wed"){
      studywed = document.getElementById("study_wed").innerHTML = setHours()
      totalstudyhours += studywed;

    } else if(day == "thursday"|| day == "thu"){
      studythu = document.getElementById("study_thu").innerHTML = setHours()
      totalstudyhours += studythu;
    
    } else if( day== "friday"||day == "fri"){
      studyfri =  document.getElementById("study_fri").innerHTML = setHours()
      totalstudyhours += studyfri;

    } else if(day == "saturday"|| day == "sat"){
      studysat = document.getElementById("study_sat").innerHTML = setHours()
      totalstudyhours += studysat;
    
    } else if(day == "sunday"|| day == "sun"){
      studysun = document.getElementById("study_sun").innerHTML = setHours()
      totalstudyhours += studysun;
    } else{
      alert("Incorrect input!")
    }
    console.log(totalstudyhours)
    document.getElementById("studytotal").innerHTML = totalstudyhours;
    return totalstudyhours;
  
  }

  totalhobbyhours = 0;
  function setHobbies(){
    date = setDate()
    
    if (date == "monday"||date == "mon"){
     hobbymon = document.getElementById("hobby_mon").innerHTML = setHours()
     totalhobbyhours += hobbymon;
    
    } else if(day == "tuesday"|| date == "tue"){
      hobbytue = document.getElementById("hobby_tue").innerHTML = setHours()
      totalhobbyhours += hobbytue;
    
    } else if(day == "wednesday"|| date == "wed"){
      hobbywed = document.getElementById("hobby_wed").innerHTML = setHours()
      totalhobbyhours += hobbywed;

    } else if(day == "thursday"|| day == "thu"){
      hobbythu = document.getElementById("hobby_thu").innerHTML = setHours()
      totalhobbyhours += hobbythu;
    
    } else if( day== "friday"||day == "fri"){
      hobbyfri = document.getElementById("hobby_fri").innerHTML = setHours()
      totalhobbyhours += hobbyfri;

    } else if(day == "saturday"|| day == "sat"){
      hobbysat = document.getElementById("hobby_sat").innerHTML = setHours()
      totalhobbyhours += hobbysat;

    } else if(day == "sunday"|| day == "sun"){
      hobbysun = document.getElementById("hobby_sun").innerHTML = setHours()
      totalhobbyhours += hobbysun;
    } else{
      alert("Incorrect input!")
    }
    
    document.getElementById("hobbytotal").innerHTML = totalhobbyhours;
    return totalhobbyhours;
  }
  
  function allTotal(){
    var totalhours = totalworkhours + totalstudyhours + totalhobbyhours;
    document.getElementById("testi").innerHTML = totalhours
    return totalhours;
  }
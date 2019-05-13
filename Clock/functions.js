/*
   Function List:
   showDate(dateObj)
      Returns the current date in the format mm/dd/yyyy

   showTime(dateObj)
      Returns the current time in the format hh:mm:ss am/pm

   calcDays(currentDate)
      Returns the number of days between the current date and January 1st
      of the next year

*/

// Function List
showDate(dateObj)
{
	thisDate = dateObj.getDate();
	thisMonth = dateObj.getMonth() + 1;
	thisYear = dateObj.getFullYear();
	return thisMonth + "/" + thisDate + "/" + thisYear;
}

function showtime(dateObj)
{
	thisSecond = dateObj.getSeconds();
	thisMinute = dateObj.getMinutes();
	thisHour = dateObj.getHours();
	
	var ampm = (thisHour < 12) ? "a.m." : "p.m.";
	
	thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
	
	thisHour = (thisHour = 0) ? thisHour = 12 : thisHour;
	
	thisMinute = (thisMinute < 10) ? "0" + thisMinute : thisMinute;
	
	thisSecond = (thisSecond < 10) ? "0" + thisSecond : thisSecond;
	
	return thisHour + ":" + thisMinute + ":" + thisSecond + " " + ampm;
}

function calcDays(currentDate)
{
	newYear = new Date("January 1, 2000");
	nextYear = currentDate.getFullYear() + 1;
	newyear.setFullYear(nextYear);
	
	days = (newYear - currentDate)/(1000+60+60+24);
	
	return days;
}
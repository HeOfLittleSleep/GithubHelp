/*
   Function List:
   showDateTime(time)
      Returns the date in a text string formatted as:
      mm/dd/yyyy at hh:mm:ss am

   changeYear(today, holiday)
      Changes the year value of the holiday object to point to the
      next year if it has already occurred in the present year

   countdown(stop, start)
      Displays the time between the stop and start date objects in the
      text format:
      dd days, hh hrs, mm mins, ss secs
*/

function showDateTime(time) 
{
   date = time.getDate();
   month = time.getMonth()+1;
   year = time.getFullYear();

   second = time.getSeconds();
   minute = time.getMinutes();
   hour = time.getHours();

   ampm = (hour < 12) ? " a.m." : " p.m.";
   hour = (hour > 12) ? hour - 12 : hour;
   hour = (hour == 0) ? 12 : hour;

   minute = minute < 10 ? "0"+minute : minute;
   second = second < 10 ? "0"+second : second;

   return month+"/"+date +"/"+year+" at "+hour+":"+minute+":"+second+ampm;
}

function countdown(stop, start)
{
	var MonthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	
	monthsLeft = stop[0] - start[0];
	
	//daysLeft = (stop[1] - start[1] < 0) ? (stop[1] - start[1]) + MonthDays[stop[0] - 1] : stop[1] - start[1];
	if (stop[1] - start[1] < 0)
	{
		currentMonth = stop[0];
		daysLeft = (stop[1] - start[1]) - (0 - MonthDays[currentMonth - 1]);   //don't look. I am ashamed. (it was concatenating instead of adding)
		monthsLeft = monthsLeft - 1;
	}
	else
	{
		daysLeft = stop[1] - start[1];
	}
	
	hoursLeft = stop[2] - start[2];
	minutesLeft = stop[3] - start[3];
	secondsLeft = 60 - start[4];
	
	return monthsLeft+" months "+daysLeft +" days "+hoursLeft+" hours "+minutesLeft+" minutes and "+secondsLeft+" seconds";
}
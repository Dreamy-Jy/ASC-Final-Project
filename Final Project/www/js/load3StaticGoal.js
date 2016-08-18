function getShortDecription(list){
	return list[0];
}
function giveShortDecription(list, input){
	list[0] = input;
}

function getTime(list){
	return list[1];
}
function giveTime(list, input){
	list[1] = input;
}



var mainName = "Success in School and Beyond";
var mainTime = "9/8/2016 - 6/28/2017";
var mainDecription = "My plan is to get a 95 GPA.";

var smartgoal1 = ["During the first week of school, select your classes.","9/12/2016"];
var smartgoal2 = ["Talk to your friends about study habits.","9/20/2016"];
var smartgoal3 = ["Take 25 mins each night to study for each class.","everyday"];
var smartgoal4 = ["Take 10 mins a day to research about current events.","everyday"];

var smartgoals = [smartgoal1,smartgoal2,smartgoal3,smartgoal4];


function FormateToHTML(goal) {
	var name = getShortDecription(goal);
	var time = getTime(goal);
	return ('<div class="content-top-grids-box"><div class="content-top-grid"></div><div class="content-top-grid-title"><div class="content-top-grid-title-left"><h4>'+name+'</h4><ul><li><a>'+time+'</a></li></ul></div><div class="content-top-grid-title-right"></div><div class="clear"></div></div></div>');
}

function pushToMainPage(HTML_Text, look_For, idOrClass){
	if (idOrClass) {
		document.getElementById(look_For).innerHTML = document.getElementById(look_For).innerHTML + HTML_Text ;
	} else {
		document.getElementsByClassName(look_For).innerHTML = document.getElementById(look_For).innerHTML + HTML_Text;
	}
}

function resetHMTL(look_For, idOrClass){
	if (idOrClass) {
		document.getElementById(look_For).innerHTML = '';
	} else {
		document.getElementsByClassName(look_For).innerHTML = '';
	}
}

function pushAllLoadedGoalsToMainPage(list_Of_Goals, put_In, idOrClass){
	resetHMTL(put_In,idOrClass);


	var header = '<div class="content-top-grids"><div class="content-top-grids" ><div class="wrap"><div class="content-top-header"><h3>Success in School and Beyond</h3><p>9/8/2016 - 6/28/2017</p><p style="font-size: 15px; color: #000000;">My plan is to get a 95 GPA.</p></div><div class="clear"></div>';
	pushToMainPage(header,put_In,idOrClass);

	for (var i = 0; i <= list_Of_Goals.length-1; i++) {
	 	pushToMainPage(FormateToHTML(list_Of_Goals[i]), put_In, idOrClass);
	 }

	 var ender = '<div class="clear"> </div></div></div>';
	 pushToMainPage(ender,put_In,idOrClass);
}
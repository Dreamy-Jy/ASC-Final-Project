/// load.js 2

//----------------------getters, setters, and checker of the data-------------------------------//
function getName(list){
	return list[0];
}
function giveName(list, input){
	list[0] = input;
}

function getStart(list){
	return list[1];
}
function giveStart(list, input){
	list[1] = input;
}

function getEnd(list){
	return list[2];
}
function giveEnd(list,input){
	list[2] = input;
}

function getDescription(list){
	return list[3];
}
function giveDescription(list,input){
	list[3] = input;
}
//anything dea 
function getSteps(list){
	return list[4];
}
function getStep(list,index){
	return list[4][index];
}


/*This data for this function many need to be specail made*/
function giveSteps(list,input){}
function giveStep(list,index,input){}

function checkIndexVal(list,index, excpectedValue){
	return (list[index] == excpectedValue);
}
function checkListInListVal(list,indexList1, indexList2, excpectedValue){
	return (list[indexList1][indexList2] == excpectedValue);
}
//---------------------end of the getters, setters, and checkers group-------------------------//


/*A map of what a goal should look like
var goalData = [null NAME, null START_DAY(mm/dd/yyyy), null END_DAY(mm/dd/yyyy), null DESCRIPTION, null STEPS-a list of smart goals];

data ay look like 
Name
time span: (mm/dd/yyyy) - (mm/dd/yyyy)
bunch of text - (Decription)
list of step
*/

var exampleGoal1 = ["Buy a Present", "8/18/2016",
					"8/22/2016", "This is a goal to help you buy the perfect present for your mom",
					["Smart1","Smart2","Smart3","Smart4"]];

var exampleGoal2 = ["Buy Decor", "8/18/2016",
					"8/28/2016", "This is a goal to help you buy the perfect decor for your home.",
					["Smart1","Smart2","Smart3","Smart4"]];

var exampleGoal3 = ["Plan Friend's Birthday", "8/18/2016",
					"8/25/2016", "This is a goal to help you plan your friend's birthday.",
					["Smart1","Smart2","Smart3","Smart4"]];

var exampleGoal4 = ["Prepare for the Marathon", "8/18/2016",
					"8/21/2016", "This is a goal to help you prepare for the marathon.",
					["Smart1","Smart2","Smart3","Smart4"]];

var eriksLoveGoal = [
					 "Success in School and Beyond","9/8/2016",
					 "6/28/2017","Help me get a 95 gpa ,and a Girl.",
					 	[
					 	 "Select classes I can to the best in, by 9/20",
					 	 "Scout grade for all the single ladies",
					 	 "Set 25 mins a side to study for each class a day",
					 	 "Find one girl you really connect with and start chating on FaceBook"
					 	]
					]

var goals = [exampleGoal1,exampleGoal2,exampleGoal3,exampleGoal4,eriksLoveGoal ];


/*FormateToHTML()

this data returned by this method is ment to be used as the first
argument in the pushToMainPage().

it get the list and turns it to HTML and returns it as a string.
*/
function FormateToHTML(goal) {
	var name = getName(goal);
	var start = getStart(goal);
	var end = getEnd(goal);
	var decription = getDescription(goal);
	/*var smart = will become the variable that get SMART goal once I figure out how to get it*/
	return ('<div class="content-top-grids-box"><div class="content-top-grid"></div><div class="content-top-grid-title"><div class="content-top-grid-title-left"><h4><a>'+name+'</a></h4><ul><li><a>'+start+'-'+end+'</a></li></ul></div><div class="content-top-grid-title-right"><a href="presetGoal.html"></a></div><div class="clear"> </div></div></div>');
}

//pushes the code formated to HTML to the index.html
//with idOrClasses true == id and false == class
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
	//resets the HTML in the element
	resetHMTL(put_In,idOrClass);

	/* 
	This block of code puts the header on the list everytime goals are 
	loaded to the main page.
	*/
	var header = '<div class="content-top-grids"><div class="content-top-grids" ><div class="wrap"><div class="content-top-header"><h3>Goals</h3></div><div class="clear"></div>';
	pushToMainPage(header,put_In,idOrClass);

	/*
	This for loop add the goals
	*/
	for (var i = 0; i <= list_Of_Goals.length-1; i++) {
	 	pushToMainPage(FormateToHTML(list_Of_Goals[i]), put_In, idOrClass);
	 }

	 /*
	This block of code puts the ender on the list everytime goals are 
	loaded to the main page. 
	 */
	 var ender = '<div class="clear"> </div></div></div>';
	 pushToMainPage(ender,put_In,idOrClass);
}
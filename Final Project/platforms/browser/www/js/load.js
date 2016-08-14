//this list will hold the information for the goal, it starts empty but ends up completely filled
//as the app goes on. We will be able to get this infromation from a file, delet it change it 
var goalData = [
				null /*NAME*/, null /*START_DAY(mm/dd/yyyy)*/, 
				null /*END_DAY(mm/dd/yyyy)*/, null /*DESCRIPTION*/,
				null /*STEPS-a list of smart goals*/
				];
/*
Name
time span: (mm/dd/yyyy) - (mm/dd/yyyy)
bunch of text - (Decription)
list of step
*/

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

var exampleGoal1 = ["Back to School Goal", "8/10/2016",
					"8/12/2016", "This is a goal I'm setting to help me complete my goals for the school.",
					["Smart1","Smart2","Smart3","Smart4"]];

var exampleGoal2 = ["Back To work", "8/10/2016",
					"8/12/2016", "This is a goal I'm setting to help me complete my goals for work.",
					["Smart1","Smart2","Smart3","Smart4"]];

var exampleGoal3 = ["Love Your Self", "8/10/2016",
					"8/12/2016", "This is a goal to help you love your self.",
					["Smart1","Smart2","Smart3","Smart4"]];

var exampleGoal4 = ["Love Your Mom", "8/10/2016",
					"8/12/2016", "This is a goal to help you love your Mom.",
					["Smart1","Smart2","Smart3","Smart4"]];

var goals = [exampleGoal1,exampleGoal2,exampleGoal3,exampleGoal4];
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
	return ('<div class= "goal"> <h1 class ="goal_name">'+name+'</h1><p class = "date">'+start+'-'+end+'</p><p class="decription">'+decription+'</p></div>');
}

//pushes the code formated to HTML to the index.html
//with idOrClasses true == id and false == class
function pushToMainPage(HTML_Text, look_For_By, idOrClass){
	if (idOrClass) {
		document.getElementById(look_For_By).innerHTML = document.getElementById(look_For_By).innerHTML + HTML_Text ;
	} else {
		document.getElementsByClassName(look_For_By).innerHTML = document.getElementById(look_For_By).innerHTML + HTML_Text;
	}
}

function pushAllLoadedGoalsToMainPage(list_Of_Goals, put_In, idOrClass){
	for (var i = 0; i <= list_Of_Goals.length-1; i++) {
	 	pushToMainPage(FormateToHTML(list_Of_Goals[i]), put_In, idOrClass);
	 } 
}
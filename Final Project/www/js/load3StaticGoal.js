/// load.js 3

//----------------------getters, setters, and checker of the data-------------------------------//
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
//---------------------end of the getters, setters, and checkers group-------------------------//


/*A map of what a goal should look like
var goalData = [null NAME, null START_DAY(mm/dd/yyyy), null END_DAY(mm/dd/yyyy), null DESCRIPTION, null STEPS-a list of smart goals];

data ay look like 
Name
time span: (mm/dd/yyyy) - (mm/dd/yyyy)
bunch of text - (Decription)
list of step
*/

var mainName = "Success in School and Beyond";
var mainTime = "9/8/2016 - 6/28/2017";
var mainDecription = "My plan to get a 95 gpa ,and a Girlfriend.";

var smartgoal1 = ["During the first week of school select your classes","9/12/2016"];
var smartgoal2 = ["Talk to your female friends about finding single ladies","9/20/2016"];
var smartgoal3 = ["Take 25 mins each night to study for each class","everyday"];
var smartgoal4 = ["Take 10 mins a date to build a relationship with your selected lady","everyday"];

var smartgoals = [smartgoal1,smartgoal2,smartgoal3,smartgoal4];


/*FormateToHTML()

this data returned by this method is ment to be used as the first
argument in the pushToMainPage().

it get the list and turns it to HTML and returns it as a string.
*/
function FormateToHTML(goal) {
	var name = getShortDecription(goal);
	var time = getTime(goal);
	return ('<div class="content-top-grids-box"><div class="content-top-grid"></div><div class="content-top-grid-title"><div class="content-top-grid-title-left"><h4>'+name+'</h4><ul><li><a>'+time+'</a></li></ul></div><div class="content-top-grid-title-right"></div><div class="clear"></div></div></div>');
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

	var header = '<div class="content-top-grids"><div class="content-top-grids" ><div class="wrap"><div class="content-top-header"><h3>Success in School and Beyond</h3><p>9/8/2016 - 6/28/2017</p><p style="font-size: 15px; color: #000000;">My plan to get a 95 gpa ,and a Girlfriend.</p></div><div class="clear"></div>';
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
/*
<!--header start-->
<div class="content-top-grids">
	<div class="content-top-grids" >
		<div class="wrap">
			<div class="content-top-header">
				<h3>Success in School and Beyond</h3>
				<p>9/8/2016 - 6/28/2017</p>
				<p>My plan to get a 95 gpa ,and a Girlfriend.</p>
			</div>
			<div class="clear"> </div>
<!--header end-->
<!--content start-->
			<div class="content-top-grids-box">
				<div class="content-top-grid"></div>
				<div class="content-top-grid-title">
					<div class="content-top-grid-title-left">
						<h4><a href="viewGoal.html">+name+</a></h4>
						<ul>
							<li><a href="viewGoal.html">+time+</a></li>
						</ul>
					</div>
					<div class="content-top-grid-title-right">
						<a href="viewGoal.html"></a>
					</div>
					<div class="clear"> </div>
				</div>
			</div>
<!--content end-->
<!--ender start-->
			<div class="clear"> </div>
		</div>
	</div>
</div>
<!--ender end-->
*/
/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs": [
		{
			"employer": "CNRL", 
			"title": "Exploitation Engineering Intern",
			"location": "Calgary, AB",
			"dates": "September, 2013 to April, 2014",
			"description": "Prepared new well completion, recompletion, and work over write-ups for heavy oil wells."
		},
		{
			"employer": "CNRL", 
			"title": "Field Operator",
			"location": "Calgary, AB",
			"dates": "May, 2013 to September, 2013",
			"description": "Monitored heavy oil tanks and ensured that oil, water, and sand were shipped on time."
		},	
		{
			"employer": "Saudi Aramco", 
			"title": "Reservoir Engineering Intern",
			"location": "Dhahran, Saudi Arabia",
			"dates": "May, 2011 to September, 2011",
			"description": "Participated in “Smart Water Flooding” research as well as chemical EOR research projects."
		}			
	]

}

var projects = {
	"projects": [
		{
			"title": "Lafarge waste heat recycle",
			"dates": "September 2014 to May 2015",
			"description": "Worked with a multidisciplinary team to design a waste heat re-use circuit in a cement plant in order to increase efficiency, reduce costs, and reduce plant emissions.",
		},
		{
			"title": "Queen’s Start-up Summit",
			"dates": "January 2015",
			"description": "Worked with a team of engineering and commerce students to develop a business model, business strategy, financial forecasts, and a minimum viable product for a start-up idea in three days.",
		},
		{
			"title": "Design of a Small Scale Dimethyl Ether Production Facility",
			"dates": "September, 2014 to December, 2014",
			"description": "Worked with a team of engineering and commerce students to develop a business model, business strategy, financial forecasts, and a minimum viable product for a start-up idea in three days.",
		},
		{
			"title": "Mikes Bikes Business Simulation",
			"dates": "September, 2012 to December, 2012",
			"description": "Managed a bicycle production company using Mikes Bikes simulation software",
		}
	],

	
}
projects.display = function() {
		for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		}
	}

projects.display();

var bio = {
	"name": "Ryan Tang", 
	"role": "Web Developer",
	"contacts": {
		"mobile": "613-583-8264",
		"email": "rtang91@gmail.com",
		"github": "rtang91",
		"twitter": "@rtang91",
		"location": "Ottawa, ON"
	},
	"welcomeMessage": "Welcome to my resume!",
	"biopic": "images/ryan.jpg",
	"skills": ["Learning how to program", "Loves to learn", "Knows three languages"]
}


var education = {
	"schools": [
		{
			"name": "Queen's University",
			"location": "Kingston, ON",
			"degree": "Bachelor of Science in Engineering",
			"majors": "Chemical Engineering",
			"date": 2015
		}

	],
	"onlineCourses": [{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"date": "Currently being taken",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedSchoolDates);
	}
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedSchoolTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineUrl);

	
	}
}

education.display();



	
bio.display = function() {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
}
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").prepend(formattedLocation);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").prepend(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").prepend(formattedGithub);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").prepend(formattedEmail);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedMobile);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$(formattedWelcome).insertAfter( "#topContacts" );
	var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").prepend(formattedbioPic);
}

bio.display();

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

header.display = function() {
var formattedName = HTMLheaderName.replace("%data%", "Ryan Tang");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
}

header.display();

footerContacts.display = function() {

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").prepend(formattedLocation);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").prepend(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").prepend(formattedGithub);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").prepend(formattedEmail);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").prepend(formattedMobile);
}

footerContacts.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

var name = "Ryan Tang";
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0][0].toUpperCase() + 
	name [0][1].toLowerCase();

	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);



$("#mapDiv").append(googleMap);

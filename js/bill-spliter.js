var spliter = {

	recordEl : '<i class="record"><input class="sharer" placeholder="Names of all people" /> share the bill for $<input class="aom" placeholder="Amount of money" />, <input class="payer" placeholder="Payer" /> paid for it.</i>',
	recordNum : 0,

	init : function() {
		// $("#calc").hide();
	},

	addNew : function() {
		if (spliter.recordNum == 0) {spliter.showCalc();}
		$("#recordBox").append(spliter.recordEl);
		spliter.recordNum++;
	},


	showCalc : function() {
		$("#calc").removeClass("hide");
	},

	calc : function() {
		var people = {};

		var recordEls = $("#recordBox > i");
		for (var i = 0; i < spliter.recordNum; i++) {
			var record = $(recordEls[i]);
			var peopleList = spliter.splitPeople($(record.children(".sharer")).val());
			var numOfSharer = peopleList.length;
			var amount = parseInt($(record.children(".aom")).val().match(/[0-9]+/));
			if (isNaN(amount)){
					spliter.showAlert();
				break;
			}
			else {
				var avg = amount / numOfSharer;
			}
			for (var j = 0; j < peopleList.length; j++) {
				var name = peopleList[j]
				if (!people[name]){
					people[name] = 0;
				}
				people[name] += avg;
			}
			var payer = $(record.children(".payer")).val().trim();
			if(!people[payer]){
				people[payer] = 0;
			}
			people[payer] -= avg;
		}
	},

	splitPeople : function(str) {
		return str.trim().split(/[\s,]+/);
	},

	showAlert : function() {
		$(".alert").addClass("in");
	},

	hideAlert : function() {
		$(".alert").removeClass("in");	
	}

	
};


document.addEventListener('DOMContentLoaded', spliter.init);
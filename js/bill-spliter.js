var spliter = {

	recordEl : '<i class="record"><input class="sharer" placeholder="Name of each people." /> share the bill for $<input class="aom" placeholder="Amount of money" />, <input class="payer" placeholder="Payer" /> paid for it.</i>',
	recordNum : 0,

	init : function() {
		$("#calc").hide();
	},

	addNew : function() {
		if (spliter.recordNum == 0) {spliter.showCalc();}
		$("#recordBox").append(spliter.recordEl);
		spliter.recordNum++;
	},


	showCalc : function() {
		$("#calc").show();
	},

	calc : function() {
		var people = {};

		var recordEls = $("#recordBox > i");
		for (var i = 0; i < spliter.recordNum; i++) {
			var peopleList = spliter.splitPeople(recordEls[i].children(".sharer").val());
			var numOfSharer = peopleList.length;
			var amount = parseInt(recordEls[i].children(".aom").val().match(/[0-9]+/));
			if (isNaN(amount)){
				$(".alert").alert();
				break;
			}
			else {
				var avg = amount / numOfSharer;
			}
			for (var j = 0; j < peopleList.length; j++) {
				if (!people.peopleList[j]){
					people.peopleList[j] = 0;
				}
				people.peopleList[j] += avg;
			}
			var payer = recordEls[i].children(".payer").val().trim();
			if(!people.payer){
				people.payer = 0;
			}
			people.payer -= avg;
		}
	},

	splitPeople : function(str) {
		return str.trim().split(/[\s,]+/);
	}

	
};


document.addEventListener('DOMContentLoaded', spliter.init);
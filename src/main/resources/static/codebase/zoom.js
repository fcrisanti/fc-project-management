if(!window.ganttModules){
	window.ganttModules = {};
}

ganttModules.zoom = (function(gantt){

	gantt.ext.zoom.init({
		levels: [
			{
				name: "hours",
				scales: [
					{unit: "day", step: 1, format: "%d %M"},
					{unit: "hour", step: 1, format: "%h"},
				],
				round_dnd_dates: true,
				min_column_width: 30,
				scale_height: 60
			},
			{
				name: "days",
				scales: [
					{unit: "month", step: 1, format: "%M"},
					{unit: "week", step: 1, format: "%W"},
					{unit: "day", step: 1, format: "%D"},
				],
				round_dnd_dates: true,
				min_column_width: 60,
				scale_height: 60
			},
			{
				name: "weeks",
				scales: [
					{unit: "year", step: 1, format: "%Y"},
					{unit: "month", step: 1, format: "%M"},
					{unit: "week", step: 1, format: "%W"},
				],
				round_dnd_dates: false,
				min_column_width: 60,
				scale_height: 60
			},
			{
				name: "months",
				scales: [
					{unit: "year", step: 1, format: "%Y"},
					{unit: "month", step: 1, format: "%M"}
				],
				round_dnd_dates: false,
				min_column_width: 50,
				scale_height: 60
			},
			{
				name: "quarters",
				scales: [
					{unit: "year", step: 1, format: "%Y"},
					{unit: "quarter", step: 1, format: function quarterLabel(date) {
						var month = date.getMonth();
						var q_num;
		
						if (month >= 9) {
							q_num = 4;
						} else if (month >= 6) {
							q_num = 3;
						} else if (month >= 3) {
							q_num = 2;
						} else {
							q_num = 1;
						}
		
						return "Q" + q_num;
					}},
					{unit: "month", step: 1, format: "%M"}
				],
				round_dnd_dates: false,
				min_column_width: 50,
				scale_height: 60
			},
			{
				name: "years",
				scales: [
					{unit: "year", step: 1, format: "%Y"},
				],
				round_dnd_dates: false,
				min_column_width: 50,
				scale_height: 60
			}
		]
	
	});

	var isActive = true;

	return {
		deactivate: function(){
			isActive = false;
		},
		setZoom: function(level){
			isActive = true;
			gantt.ext.zoom.setLevel(level);
		},
		zoomOut: function(){
			isActive = true;
			gantt.ext.zoom.zoomOut();
			gantt.render();
		},
		zoomIn: function(){
			isActive = true;
			gantt.ext.zoom.zoomIn();
			gantt.render();
		},
		canZoomOut: function() {
			var level = gantt.ext.zoom.getCurrentLevel();

			return  !isActive || !(level > 4);
		},
		canZoomIn: function(){
			var level = gantt.ext.zoom.getCurrentLevel();
			return !isActive || !(level === 0);
		}
	};
})(gantt);
if (!window.ganttModules) {
	window.ganttModules = {};
}

ganttModules.layout = {
	init: function (gantt, durationFormatter, linksFormatter) {
		gantt.config.layout = {
			css: "gantt_container",
			cols: [
				{
					width: 409,
					min_width: 300,

					// adding horizontal scrollbar to the grid via the scrollX attribute
					rows: [
						{ view: "grid", scrollX: "gridScroll", scrollable: true, scrollY: "scrollVer" },
						{ view: "scrollbar", id: "gridScroll", group:"horizontalScrolls" }
					]
				},
				{ resizer: true, width: 1 },
				{
					rows: [
						{ view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" },
						{ view: "scrollbar", id: "scrollHor", group:"horizontalScrolls" }
					]
				},
				{ view: "scrollbar", id: "scrollVer" }
			]
		};

		var hourFormatter = gantt.ext.formatters.durationFormatter({
			enter: "hour", 
			store: "hour", 
			format: "hour",
			short: true	
		});
		var textEditor = {type: "text", map_to: "text"};
		var dateEditor = {type: "date", map_to: "start_date", min: new Date(2018, 0, 1), max: new Date(2019, 0, 1)};
		var durationEditor = {type: "duration", map_to: "duration", formatter: durationFormatter, min:0, max:10000};
		var hourDurationEditor = {type: "duration", map_to: "duration", formatter: hourFormatter, min:0, max:10000};
		var predecessorEditor = {type: "predecessor", map_to: "auto", formatter: linksFormatter};
		gantt.config.columns = [
			{ name: "", width: 15, resize: false, template: function (task) { return "<span class='gantt_grid_wbs'>" + gantt.getWBSCode(task) + "</span>" } },
			{ name: "text", tree: true, width: 180, resize: true, editor: textEditor },
			{ name: "start_date", label: "Start", align: "center", resize: true, width: 80, editor: dateEditor },
			{ name: "duration", label: "Duration", resize: true, align: "center", width: 60, template: function(task) {
				return durationFormatter.format(task.duration);
			}, editor: durationEditor },
			{ name: "duration_hours", label: "<div style='white-space: normal;line-height: 20px;margin: 10px 0;'>Duration (hours)</div>", resize: true, align: "center", width: 65, template: function(task) {
				return hourFormatter.format(task.duration);
			}, editor: hourDurationEditor },
			{
				name: "predecessors", label: "Predecessors", width: 80, align: "left", editor: predecessorEditor, resize: true, template: function (task) {
					var links = task.$target;
					var labels = [];
					for (var i = 0; i < links.length; i++) {
						var link = gantt.getLink(links[i]);
						labels.push(linksFormatter.format(link));
					}
					return labels.join(", ")
				}
			},
			{ name: "add", "width": 44 }
		];
	}
};
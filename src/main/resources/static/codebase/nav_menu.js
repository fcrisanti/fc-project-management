if(!window.ganttModules){
	window.ganttModules = {};
}

ganttModules.menu = (function(){
	function addClass(node, className){
		node.className += " " + className;
	}

	function removeClass(node, className){
		node.className = node.className.replace(new RegExp(" *" + className.replace(/\-/g, "\\-"), "g"), "");
	}

	function getButton(name){
		return document.querySelector(".gantt-controls [data-action='"+name+"']");
	}

	function highlightButton(name){
		addClass(getButton(name), "menu-item-active");
	}
	function unhighlightButton(name){
		removeClass(getButton(name), "menu-item-active");
	}

	function disableButton(name){
		addClass(getButton(name), "menu-item-disabled");
	}

	function enableButton(name){
		removeClass(getButton(name), "menu-item-disabled");
	}

	function refreshZoomBtns(){
		var zoom = ganttModules.zoom;
		if(zoom.canZoomIn()){
			enableButton("zoomIn");
		}else{
			disableButton("zoomIn");
		}
		if(zoom.canZoomOut()){
			enableButton("zoomOut");
		}else{
			disableButton("zoomOut");
		}
	}

	function refreshUndoBtns(){
		if(!gantt.getUndoStack().length){
			disableButton("undo");
		}else{
			enableButton("undo");
		}

		if(!gantt.getRedoStack().length){
			disableButton("redo");
		}else{
			enableButton("redo");
		}

	}
	
	setInterval(refreshUndoBtns, 1000);
	
	function toggleZoomToFitBtn(){
		if(ganttModules.zoomToFit.isEnabled()){
			highlightButton("zoomToFit");
		}else{
			unhighlightButton("zoomToFit");
		}
	}

	var menu = {
		undo: function(){
			gantt.undo();
			refreshUndoBtns();
		},
		redo: function(){
			gantt.redo();
			refreshUndoBtns();
		},
		zoomIn: function(){
			ganttModules.zoomToFit.disable();
			var zoom = ganttModules.zoom;
			zoom.zoomIn();
			refreshZoomBtns();
			toggleZoomToFitBtn()
		},
		zoomOut: function(){
			ganttModules.zoomToFit.disable();
			ganttModules.zoom.zoomOut();
			refreshZoomBtns();
			toggleZoomToFitBtn()
		},
		zoomToFit: function(){
			ganttModules.zoom.deactivate();
			ganttModules.zoomToFit.toggle();
			toggleZoomToFitBtn();
			refreshZoomBtns();
		},
		fullscreen: function(){
			gantt.expand();
		},
		collapseAll: function(){
			gantt.eachTask(function(task){
				task.$open = false;
			});
			gantt.render();

		},
		expandAll: function(){
			gantt.eachTask(function(task){
				task.$open = true;
			});
			gantt.render();
		},
		toggleAutoScheduling: function(){
			gantt.config.auto_scheduling = !gantt.config.auto_scheduling;
			if(gantt.config.auto_scheduling){
				gantt.autoSchedule();
				highlightButton("toggleAutoScheduling");
			}else{
				unhighlightButton("toggleAutoScheduling")
			}
		},
		toggleCriticalPath: function(){
			gantt.config.highlight_critical_path = !gantt.config.highlight_critical_path;
			if(gantt.config.highlight_critical_path){
				highlightButton("toggleCriticalPath");
			}else{
				unhighlightButton("toggleCriticalPath")
			}
			gantt.render();
		},
		toPDF: function(){
			gantt.exportToPDF();
		},
		toPNG: function(){
			gantt.exportToPNG();
		},
		toExcel: function(){
			gantt.exportToExcel();
		},
		toMSProject: function(){
			gantt.exportToMSProject();
		}
	};


	return {
		setup: function(){

			var navBar = document.querySelector(".gantt-controls");
			gantt.event(navBar, "click", function(e){
				var target = e.target || e.srcElement;
				while(!target.hasAttribute("data-action") && target !== document.body){
					target = target.parentNode;
				}

				if(target && target.hasAttribute("data-action")){
					var action = target.getAttribute("data-action");
					if(menu[action]){
						menu[action]();
					}
				}
			});
			this.setup = function(){};
		}
	}
})(gantt);
if(!window.ganttModules){
    window.ganttModules = {};
}

ganttModules.grid_struct = (function(gantt) {
    gantt.templates.grid_row_class = function(start, end, task){
        return gantt.hasChild(task.id) ? "gantt_parent_row": "";
    };
})(gantt);
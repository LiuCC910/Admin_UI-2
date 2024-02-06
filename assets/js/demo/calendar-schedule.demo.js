/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var handleCalendarDemo = function() {
	// external events
	var containerEl = document.getElementById('external-events');
  var Draggable = FullCalendarInteraction.Draggable;
	new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText,
        color: eventEl.getAttribute('data-color')
      };
    }
  });
  
  // fullcalendar
  
  var d = new Date();
	var month = d.getMonth() + 1;
	    month = (month < 10) ? '0' + month : month;
	var year = d.getFullYear();
	var day = d.getDate();
	var today = moment().startOf('day');
  var calendarElm = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarElm, {
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prev,next today'
    },
    buttonText: {
    	today:    'Today',
		month:    'Month',
		week:     'Week',
		day:      'Day'
    },
    initialView: 'dayGridMonth',
    editable: true,
    droppable: true,
  	themeSystem: 'bootstrap',
		views: {
			timeGrid: {
				eventLimit: 6 // adjust to 6 only for timeGridWeek/timeGridDay
			}
		},
  	events: [{ // 依同類別、同人員丟出排班日期，日期遞增
			title: '公休日',
			start: year + '-01' +'-29',
			end: year + '-01' +'-29',
			color: app.color.muted // 非當月
		},{
			title: '公休日',
			start: year + '-'+ month +'-05',
			end: year + '-'+ month +'-05',
			color: app.color.gray // 門店公休日
		},{
			title: '公休日',
			start: year + '-'+ month +'-12',
			end: year + '-'+ month +'-12',
			color: app.color.gray
		},{
			title: '公休日',
			start: year + '-'+ month +'-19',
			end: year + '-'+ month +'-19',
			color: app.color.gray
		},{
			title: '公休日',
			start: year + '-'+ month +'-26',
			end: year + '-'+ month +'-26',
			color: app.color.gray
		},{
			title: '公休日',
			start: year + '-03' +'-04',
			end: year + '-03' +'-04',
			color: app.color.muted
		},{
			title: '國定假日',
			start: year + '-'+ month +'-09',
			end: year + '-'+ month +'-14',
			color: app.color.dark // 國定假日
		},{
			title: '國定假日',
			start: year + '-'+ month +'-28',
			end: year + '-'+ month +'-28',
			color: app.color.dark
		},{
			title: '開學活動(3/2-3/16)',
			start: year + '-03' +'-02',
			end: year + '-03' +'-17',
			color: app.color.red
		},{
			title: 'A0001(全)',
			start: year + '-'+ month +'-01',
			end: year + '-'+ month +'-04',
			color: app.color.primary
		},{
			title: 'A0001(全)',
			start: year + '-'+ month +'-14',
			end: year + '-'+ month +'-17',
			color: app.color.primary
		},{
			title: 'A0001(全)',
			start: year + '-'+ month +'-23',
			end: year + '-'+ month +'-26',
			color: app.color.primary
		},{
			title: 'A0001(晚)',
			start: year + '-03' +'-01',
			end: year + '-03' +'-04',
			color: app.color.muted
		},{
			title: 'A0002(全)',
			start: year + '-01' +'-30',
			end: year + '-'+ month +'-01',
			color: app.color.muted
		},{
			title: 'A0002(早)',
			start: year + '-'+ month +'-02',
			end: year + '-'+ month +'-04',
			color: app.color.success
		},{
			title: 'A0002(全)',
			start: year + '-'+ month +'-04',
			end: year + '-'+ month +'-04',
			color: app.color.success
		},{
			title: 'A0002(晚)',
			start: year + '-'+ month +'-08',
			end: year + '-'+ month +'-08',
			color: app.color.success
		},{
			title: 'A0002(全)',
			start: year + '-'+ month +'-17',
			end: year + '-'+ month +'-17',
			color: app.color.success
		},{
			title: 'A0002(全)',
			start: year + '-'+ month +'-20',
			end: year + '-'+ month +'-23',
			color: app.color.success
		},{
			title: 'A0002(晚)',
			start: year + '-'+ month +'-24',
			end: year + '-'+ month +'-26',
			color: app.color.success
		},{
			title: 'A0002(全)',
			start: year + '-03' +'-01',
			end: year + '-03' +'-03',
			color: app.color.muted
		},{
			title: 'A0003(全)',
			start: year + '-01' +'-30',
			end: year + '-'+ month +'-01',
			color: app.color.muted
		},{
			title: 'A0003(全)',
			start: year + '-'+ month +'-04',
			end: year + '-'+ month +'-04',
			color: app.color.warning
		},{
			title: 'A0003(全)',
			start: year + '-'+ month +'-18',
			end: year + '-'+ month +'-18',
			color: app.color.warning
		},{
			title: 'A0003(全)',
			start: year + '-'+ month +'-20',
			end: year + '-'+ month +'-23',
			color: app.color.warning
		},{
			title: 'A0003(全)',
			start: year + '-'+ month +'-27',
			end: year + '-'+ month +'-27',
			color: app.color.warning
		},{
			title: 'A0003(全)',
			start: year + '-'+ month +'-29',
			end: year + '-'+ month +'-29',
			color: app.color.warning
		},{
			title: 'A0003(全)',
			start: year + '-03' +'-01',
			end: year + '-03' +'-04',
			color: app.color.muted
		},{
			title: 'A0004(全)',
			start: year + '-'+ month +'-06',
			end: year + '-'+ month +'-08',
			color: app.color.lime
		},{
			title: 'A0004(晚)',
			start: year + '-'+ month +'-17',
			end: year + '-'+ month +'-19',
			color: app.color.lime
		},{
			title: 'A0004(全)',
			start: year + '-'+ month +'-23',
			end: year + '-'+ month +'-26',
			color: app.color.lime
		},{
			title: 'A0005(全)',
			start: year + '-'+ month +'-06',
			end: year + '-'+ month +'-06',
			color: app.color.indigo
		},{
			title: 'A0005(晚)',
			start: year + '-'+ month +'-14',
			end: year + '-'+ month +'-14',
			color: app.color.indigo
		},{
			title: 'A0005(全)',
			start: year + '-'+ month +'-15',
			end: year + '-'+ month +'-17',
			color: app.color.indigo
		},{
			title: 'A0005(早)',
			start: year + '-'+ month +'-23',
			end: year + '-'+ month +'-26',
			color: app.color.indigo
		},{
			title: 'A0005(全)',
			start: year + '-'+ month +'-29',
			end: year + '-'+ month +'-29',
			color: app.color.indigo
		},{
			title: 'A0006(全)',
			start: year + '-'+ month +'-01',
			end: year + '-'+ month +'-01',
			color: app.color.purple
		},{
			title: 'A0006(全)',
			start: year + '-'+ month +'-03',
			end: year + '-'+ month +'-03',
			color: app.color.purple
		},{
			title: 'A0006(全)',
			start: year + '-'+ month +'-07',
			end: year + '-'+ month +'-09',
			color: app.color.purple
		},{
			title: 'A0006(晚)',
			start: year + '-'+ month +'-20',
			end: year + '-'+ month +'-23',
			color: app.color.purple
		},{
			title: 'A0007(全)',
			start: year + '-'+ month +'-02',
			end: year + '-'+ month +'-02',
			color: app.color.pink
		},{
			title: 'A0007(全)',
			start: year + '-'+ month +'-08',
			end: year + '-'+ month +'-08',
			color: app.color.pink
		},{
			title: 'A0007(全)',
			start: year + '-'+ month +'-14',
			end: year + '-'+ month +'-14',
			color: app.color.pink
		},{
			title: 'A0007(晚)',
			start: year + '-'+ month +'-16',
			end: year + '-'+ month +'-16',
			color: app.color.pink
		},{
			title: 'A0007(全)',
			start: year + '-'+ month +'-17',
			end: year + '-'+ month +'-19',
			color: app.color.pink
		},{
			title: 'A0007(全)',
			start: year + '-'+ month +'-27',
			end: year + '-'+ month +'-27',
			color: app.color.pink
		},{
			title: 'B0001(晚)',
			start: year + '-'+ month +'-01',
			end: year + '-'+ month +'-01',
			color: app.color.cyan
		},{
			title: 'B0001(晚)',
			start: year + '-'+ month +'-03',
			end: year + '-'+ month +'-03',
			color: app.color.cyan
		},{
			title: 'B0001(早)',
			start: year + '-'+ month +'-04',
			end: year + '-'+ month +'-04',
			color: app.color.cyan
		},{
			title: 'B0001(晚)',
			start: year + '-'+ month +'-02',
			end: year + '-'+ month +'-02',
			color: app.color.cyan
		},{
			title: 'B0001(早)',
			start: year + '-'+ month +'-16',
			end: year + '-'+ month +'-16',
			color: app.color.cyan
		},{
			title: 'B0001(早)',
			start: year + '-'+ month +'-17',
			end: year + '-'+ month +'-19',
			color: app.color.cyan
		},{
			title: 'B0001(晚)',
			start: year + '-'+ month +'-23',
			end: year + '-'+ month +'-25',
			color: app.color.cyan
		},{
			title: 'B0001(晚)',
			start: year + '-'+ month +'-27',
			end: year + '-'+ month +'-27',
			color: app.color.cyan
		},{
			title: 'B0001(早)',
			start: year + '-03' +'-01',
			end: year + '-03' +'-04',
			color: app.color.muted
		},{
			title: 'B0002(晚)',
			start: year + '-'+ month +'-02',
			end: year + '-'+ month +'-02',
			color: app.color.cyan
		},{
			title: 'B0002(晚)',
			start: year + '-'+ month +'-04',
			end: year + '-'+ month +'-04',
			color: app.color.cyan
		},{
			title: 'B0002(晚)',
			start: year + '-'+ month +'-06',
			end: year + '-'+ month +'-06',
			color: app.color.cyan
		},{
			title: 'B0002(晚)',
			start: year + '-'+ month +'-17',
			end: year + '-'+ month +'-17',
			color: app.color.cyan
		},{
			title: 'B0002(晚)',
			start: year + '-'+ month +'-23',
			end: year + '-'+ month +'-23',
			color: app.color.cyan
		},{
			title: 'B0002(晚)',
			start: year + '-'+ month +'-29',
			end: year + '-'+ month +'-29',
			color: app.color.cyan
		},{
			title: 'B0002(晚)',
			start: year + '-03' +'-01',
			end: year + '-03' +'-04',
			color: app.color.muted
		},{
			title: 'B0003(晚)',
			start: year + '-01' +'-30',
			end: year + '-'+ month +'-01',
			color: app.color.muted
		},{
			title: 'B0003(晚)',
			start: year + '-'+ month +'-03',
			end: year + '-'+ month +'-03',
			color: app.color.cyan
		},{
			title: 'B0003(晚)',
			start: year + '-'+ month +'-07',
			end: year + '-'+ month +'-07',
			color: app.color.cyan
		},{
			title: 'B0003(晚)',
			start: year + '-'+ month +'-15',
			end: year + '-'+ month +'-15',
			color: app.color.cyan
		},{
			title: 'B0003(晚)',
			start: year + '-'+ month +'-16',
			end: year + '-'+ month +'-16',
			color: app.color.cyan
		}]
  });
  
	calendar.render();
};

var Calendar = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleCalendarDemo();
		}
	};
}();

$(document).ready(function() {
	Calendar.init();
});
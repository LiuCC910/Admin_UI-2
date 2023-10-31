/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var handleGritterNotification = function() {
	$('#add-sticky').click( function() {
		$.gritter.add({
			title: 'This is a sticky notice!',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacus ut lectus rutrum placerat. ',
			image: '../assets/img/user/user-2.jpg',
			sticky: true,
			time: '',
			class_name: 'my-sticky-class'
		});
		return false;
	});
	$('#add-regular').click( function() {
		$.gritter.add({
			title: 'This is a regular notice!',
			text: 'This will fade out after a certain amount of time. Sed tempus lacus ut lectus rutrum placerat. ',
			image: '../assets/img/user/user-3.jpg',
			sticky: false,
			time: ''
		});
		return false;
	});
	$('#add-max').click( function() {
		$.gritter.add({
			title: 'This is a notice with a max of 3 on screen at one time!',
			text: 'This will fade out after a certain amount of time. Sed tempus lacus ut lectus rutrum placerat. ',
			sticky: false,
			image: '../assets/img/user/user-4.jpg',
			before_open: function() {
				if($('.gritter-item-wrapper').length === 3) {
					return false;
				}
			}
		});
		return false;
	});
	$('#add-without-image').click(function(){
		$.gritter.add({
			title: 'This is a notice without an image!',
			text: 'This will fade out after a certain amount of time.'
		});
		return false;
	});
	$('#add-gritter-light').click(function(){
		$.gritter.add({
			title: 'This is a light notification',
			text: 'Just add a \'gritter-light\' class_name to your $.gritter.add or globally to $.gritter.options.class_name',
			class_name: 'gritter-light'
		});
		return false;
	});
	$('#add-with-callbacks').click(function(){
		$.gritter.add({
			title: 'This is a notice with callbacks!',
			text: 'The callback is...',
			before_open: function(){
				alert('I am called before it opens');
			},
			after_open: function(e){
				alert('I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n' + e);
			},
			before_close: function(manual_close) {
				var manually = (manual_close) ? 'The \'X\' was clicked to close me!' : '';
				alert('I am called before it closes: I am passed the jQuery object for the Gritter element... \n' + manually);
			},
			after_close: function(manual_close){
				var manually = (manual_close) ? 'The \'X\' was clicked to close me!' : '';
				alert('I am called after it closes. ' + manually);
			}
		});
		return false;
	});
	$('#add-sticky-with-callbacks').click(function(){
		$.gritter.add({
			title: 'This is a sticky notice with callbacks!',
			text: 'Sticky sticky notice.. sticky sticky notice...',
			sticky: true,
			before_open: function(){
				alert('I am a sticky called before it opens');
			},
			after_open: function(e){
				alert('I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n' + e);
			},
			before_close: function(e){
				alert('I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n' + e);
			},
			after_close: function(){
				alert('I am a sticky called after it closes');
			}
		});
		return false;
	});
	$('#remove-all').click(function(){
		$.gritter.removeAll();
		return false;
	});
	$('#remove-all-with-callbacks').click(function(){
		$.gritter.removeAll({
			before_close: function(e){
				alert('I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n' + e);
			},
			after_close: function(){
				alert('I am called after everything has been closed.');
			}
		});
		return false;
	});
};

var handleSweetNotification = function() {
	$('[data-click="swal-primary"]').click(function(e) {
		e.preventDefault();
		swal({
			title: '確定預約報到？',
			text: '桌號06(6人桌) 08-21 11:30 陳先生預約3人，請確認是否使用。',
			icon: 'info',
			buttons: {
				cancel: {
					text: '取消預約',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				button: {
					text: '入座',
					value: null,
					visible: true,
					className: 'btn btn-info',
					closeModal: true,
				},
				confirm: {
					text: '點餐',
					value: true,
					visible: true,
					className: 'btn btn-success',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-info"]').click(function(e) {
		e.preventDefault();
		swal({
			title: '確定使用此桌？',
			text: '桌號03(6人桌)目前可使用，請確認是否使用。',
			icon: 'info',
			buttons: {
				cancel: {
					text: '放棄(關閉)',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				button: {
					text: '入座',
					value: null,
					visible: true,
					className: 'btn btn-info',
					closeModal: true,
				},
				confirm: {
					text: '點餐',
					value: true,
					visible: true,
					className: 'btn btn-success',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-success"]').click(function(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'success',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Success',
					value: true,
					visible: true,
					className: 'btn btn-success',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-warning"]').click(function(e) {
		e.preventDefault();
		swal({
			title: '確定開始點餐?',
			text: '桌號10(6人桌)目前入座5人，請確認是否點餐。',
			icon: 'info',
			buttons: {
				cancel: {
					text: '放棄(關閉)',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				button: {
					text: '取消入座',
					value: null,
					visible: true,
					className: 'btn btn btn-info',
					closeModal: true,
				},
				confirm: {
					text: '點餐',
					value: true,
					visible: true,
					className: 'btn btn-success',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-danger"]').click(function(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'error',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-info',
					closeModal: true,
				},
				confirm: {
					text: 'Warning',
					value: true,
					visible: true,
					className: 'btn btn-danger',
					closeModal: true
				}
			}
		});
	});
};


var Notification = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleGritterNotification();
			handleSweetNotification();
		}
	};
}();

$(document).ready(function() {
	Notification.init();
});
$(function() {


	/*POPOVER*/
	$('[data-toggle="popover"]').popover({
		placement: 'bottom',
		html: true,
		trigger: "hover"
	});
	/*POPOVER*/


	/*ACCOUNT CHECKBOX*/
	$('.panel-list__checkbox input[type="checkbox"]').change(function () {
		if ($(this).is(':checked')) {
			$(this).parent().parent().parent().children().children().children('.panel-quantity__buttons').addClass('show');
			$(this).parent().parent().parent().children().children().children().children('.panel-quantity__box').removeClass('panel-quantity__box_no-border');
		} else {
			$(this).parent().parent().parent().children().children().children('.panel-quantity__buttons').removeClass('show');
			$(this).parent().parent().parent().children().children().children().children('.panel-quantity__box').addClass('panel-quantity__box_no-border');
		}
	});
	/*ACCOUNT CHECKBOX*/

	/*COUNTER*/
	$(".panel-quantity__box").prop('disabled', true);

	$('.panel-list__checkbox input[type="checkbox"]').each(function (item, i) {
		if ($(this).is(':checked')) {
			$(this).parent().parent().parent().children().children().children('.panel-quantity__buttons').addClass('show');
			$(this).parent().parent().parent().children().children().children().children('.panel-quantity__box').removeClass('panel-quantity__box_no-border');
		}
	});

	$('.panel-quantity__plus').click(function () {
		$(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val(parseInt($(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val()) + 1);
		$buffer = $('.panel-quantity__box-buffer');
		$buffer.text($(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val());
		$(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').width($buffer.width());
	});

	$('.panel-quantity__minus').click(function () {
		$(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val(parseInt($(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val()) - 1);
		if ($(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val() == -1) {
			$(this).parent().siblings('.panel-quantity__box-wrap').find('.panel-quantity__box').val(0);
		}
	});
	/*COUNTER*/

	/*TOOLTIP*/ 
	 $('[data-toggle="tooltip"]').tooltip();
	/*TOOLTIP*/ 
});
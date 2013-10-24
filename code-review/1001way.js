$(document).on('change', '#training-add-form-container input[name="IsOwnerSpent"]', function (e) {
    if ($(this).is(':checked')) {
        $('input[name="NarratorName"]').val($(this).data('owner-name'));
        $('input[name="NarratorName"]').attr('disabled', 'disabled');
        // для срабатывания валидатора
        $('input[name="NarratorName"]').trigger('focusout');
    }
    else {
        $('input[name="NarratorName"]').removeAttr('disabled');
    }
});
// -----
if (data == "true") {
    $(self).parent().find('.trainings-joined').show();
    $('#i-was').hide();
}
if (data == "false") {
    $('#i-was').show();
    $(self).parent().find('.trainings-joined').hide();
}
if (data == "null") {
    createErrorMessage("Возникла ошибка");
}
// -----
success: function (data) {
    var exists = false;
    // проходимся по данным, пришедшим от гугла и выбираем название города
    for (var item in data.results) {
        var objects = data.results[item];

        for (var adComp in objects.address_components) {

            for (var type in objects.address_components[adComp].types) {

                if (objects.address_components[adComp].types[type] == "locality") {
                    var city = objects.address_components[adComp].long_name;
                    setCookie("geocity", city, (new Date).getTime() + (1 * 24 * 60 * 60 * 1000), null, null, null);
                    console.log(city);
                    // чтобы не менял строку города на странице поиска
                    if (window.location.href.indexOf("search") != -1) {
                        $("#footer_input_city_input").val(city);
                    } else {
                        $(".geolocation").val(city);
                    }
                    exists = true;
                    break;

                }
            }
            if (exists)
                break;
        }
        if (exists)
            break;
    }

},
// -----
$("#ratingStarsContainer").html(null);
$("#ratingStarsContainer").html(templateForRatingStars);
// -----
$('.schedule-form__day-item input[type="checkbox"]').change(function (e) {
    var itemRow = $(this).closest('.schedule-form__day-item');

    var $inputs = $(itemRow).find('.schedule-form__input_time');
    
	if ($(this).is(':checked')) {
	    $inputs.removeAttr('disabled');
	} else {
	    
	    var $imageErrorContainer1 = $('span[data-valmsg-for="' + $($inputs[0]).attr('name') + '"]');
	    var $imageErrorContainer2 = $('span[data-valmsg-for="' + $($inputs[1]).attr('name') + '"]');
	    validateErrorReset(null, $imageErrorContainer1, null, false, null);
	    validateErrorReset(null, $imageErrorContainer2, null, false, null);
	    $inputs.val(null);
	    $inputs.attr('disabled', 'disabled');
	}
});
// -----
select: function(event, ui) {
    var organizerIdContainer = '#organizer-ac-id';
    var organizerTypeContainer = '#organizer-ac-type';
    
    if ($(organizerIdContainer).length) {
        $(organizerIdContainer).val(ui.item.id);
        $(organizerTypeContainer).val(ui.item.type);
    }

    adminOrganizerACTest();
}
// -----

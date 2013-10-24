switch (notification_type) {
	case ("nonews"):
		notification_url = "/Notifications/nonews";
		$.ajax({
			url: notification_url,
			dataType: 'html',
			success: function (data) {
				gn.UI.popup('show', data);
			}
		});
		break;
	case ("deletenews"):
		notification_url = "/Notifications/deletenews";
		$.ajax({
			url: notification_url,
			dataType: 'html',
			success: function (data) {
				gn.UI.popup('show', data);
				$('.confirm_deletion').attr('href', param);
				$('.delete_news_popup').on('click', '.decline_deletion', function () {
					gn.UI.popup('hide');
				});
			}
		});
		break;
	case ("deletecontest"):
		notification_url = "/Notifications/deletecontest";
		$.ajax({
			url: notification_url,
			dataType: 'html',
			success: function (data) {
				gn.UI.popup('show', data);
				$('.confirm_deletion').attr('href', param);
				$('.delete_news_popup').on('click', '.decline_deletion', function () {
					gn.UI.popup('hide');
				});
			}
		});
		break;
	case ("deletedialog"):
		notification_url = "/Notifications/deletedialog";
		$.ajax({
			url: notification_url,
			dataType: 'html',
			success: function (data) {
				gn.UI.popup('show', data);
				$('.confirm_deletion').attr('href', param);
				$('.delete_news_popup').on('click', '.decline_deletion', function () {
					gn.UI.popup('hide');
				});
			}
		});
		break;
    case ("blocked"):
        notification_url = "/Notifications/blocked";
        $.ajax({
            url: notification_url,
            dataType: 'html',
            success: function (data) {
                gn.UI.popup('show', data);
                $('.confirm_deletion').attr('href', param);
                $('.delete_news_popup').on('click', '.decline_deletion', function () {
                    gn.UI.popup('hide');
                });
            }
        });
        break;
        
    case ("registrationCall"):
        notification_url = "/Notifications/registrationCall";
        $.ajax({
            url: notification_url,
            dataType: 'html',
            success: function (data) {
                gn.UI.popup('show', data);
                $('.confirm_deletion').attr('href', param);
                $('.modal_body').on('click', '.icon-close', function () {
                    
                    $(this).closest(".modal_container").remove();
                });
            }
        });
        break;
};
// -----

//each -> for
this.checkVkFriend = function (friend) {
    if (friend.check() == false) {
        friend.check(true);
    } else {
        friend.check(false);
    }
}
// -----
if (options == "hide") {}
// -----
// Биндинг кучи событий на $(document)
// -----
for (var i = 0; i < datesForChoice; i++) {
    var a3 = $('.meet_date:eq(' + i + ')').find('input').attr('rel');
    if (a3 == a2) {
        var chooseTextLine = $('.meet_date:eq(' + i + ')').find('.vote_number');
        var chooseNum = parseInt(chooseTextLine.children('span').html()) + 1;
        chooseTextLine.children('span').empty();
        chooseTextLine.children('span').append(chooseNum);
        $('.meet_date:eq(' + i + ')').removeClass('disabled');
        $('.meet_date:eq(' + i + ')').attr('id', 'chosenDate');
        return;
    }
}
// -----
$('.ThatsMeBtn').click(function () {
    if ($(this).closest('.vk_invite').attr('id') == undefined) {
        $('.ThatsMeBtn').addClass('hidden');
        $(this).removeClass('hidden');
        $(this).children('span').empty();
        $(this).children('span').append('Это не Я');
        $(this).css('width', '65px');
        $(this).closest('.vk_invite').attr('id', 'confirmed');//добавление id пользователю, который подтвердил себя.
    } else {
        $('.ThatsMeBtn').removeClass('hidden');
        $(this).children('span').empty();
        $(this).children('span').append('Это Я');
        $(this).css('width', '50px');
        $(this).closest('.vk_invite').removeAttr('id');
    }
});
// -----


/*
 * Очень много методов и переменных лежат в глобальном контексте
 */
function doDefaultBook() {
    $('.thumbnail_icon.default').each(function (index) {
        var neededElem = $('.thumbnail_icon.default').eq(index).parents('.thumbnails_item');
        var title = neededElem.find('.thumbnail_title a').text();
        var href = neededElem.find('.thumbnail_title a').attr('href');
        var author = neededElem.find('.thumbnail_author').text();
        $('.thumbnail_icon.default').eq(index).parent().append('<div class="thumbnail_caption_wrapper_default"><a class="thumbnail_title_default" href></a><span class="thumbnail_author_default"></span></div>');
        $('.thumbnail_icon.default').eq(index).parent().find('.thumbnail_title_default').attr('href', href).text(title);
        $('.thumbnail_icon.default').eq(index).parent().find('.thumbnail_author_default').text(author);
        $('.thumbnail_icon.default').eq(index).parents('.thumbnails_item').find('.thumbnail_caption_wrapper').remove();

        // центрируем текст внутри изображения
        var bbb = neededElem.find('.thumbnail_caption_wrapper_default');
        var h = bbb.height();
        bbb.css('margin-top', -(h / 2));
    });
};

// -----

if ($(b_block).hasClass('favourite')) {
    $(b_block).removeClass('favourite');
} else {
    var col = $('.favourite');
    $(col).removeClass('favourite');
    $(b_block).addClass('favourite');
}
if ((number < size) && (size >= insertedAfter)) {
    var obj = $('.thumbnails_item').eq(insertedAfter - 1);
    clone_block.insertAfter(obj);
}
else {
    obj = $('.thumbnails_item').eq(size - 1);
    clone_block.insertAfter(obj);
};
// -----
if (typeof thisIsGoalPage == "undefined") {}
// -----
searchstring.keyup(function () {
    if ($(this).val().length > 0) {
        $(this).parent().find('.search_cancel').fadeIn(200);
    } else {
        $(this).parent().find('.search_cancel').fadeOut(200);
    }
});
// -----
var data2 = {};
// -----
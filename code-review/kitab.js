/* communitiesList.js */
if (!containerSelector)
    $k.communitiesList.containerSelector = '.list-holder';
else
    $k.communitiesList.containerSelector = containerSelector;

if (!subContainerSelector)
    $k.communitiesList.subContainerSelector = $k.list.containerSelector;
else
    $k.communitiesList.subContainerSelector = subContainerSelector;
// -----
$k.ui.followersPopup(2, null, true, $k.communitiesList.subContainerSelector);
// -----
$(document).on('click', $k.communitiesList.containerSelector + ' .pager .page-link', function () {
        var page = $(this).attr('page');//?????
        $k.communitiesList.params.page = page;
        $k.communitiesList.reloadList(true);

        return false;
    });
// -----
if ($k.communitiesList.reloadCallback)
            $k.communitiesList.reloadCallback();

        if (fromPaginator)
            if ($k.communitiesList.pageChangedCallback)
                $k.communitiesList.pageChangedCallback();

/* community.js */
$(document).on('click', '.process-user-request', function () {
        var $dest = $(this).parents('.receive-reject-buttons-list-holder');
        var communityId = $('#community-holder').attr('item-id');
        $.post($k.url.communityToggleUserFollowRequest, { id: communityId, userId: $dest.parents('.list-item').attr('item-id'), isAccept: $(this).attr('is-accept') }, function (response) {
            if(response.success)
                $dest.html(response.result).addClass('response');
        });
    });
// -----
$(document).on('click', '.set-follower-role-button', function () {
        var $dest = $(this).parents('.set-follower-role');
        var communityId = $('#community-holder').attr('item-id');
        $.post($k.url.communitySetFollowerRole, { id: communityId, userId: $dest.parents('.list-item').attr('item-id'), role: $(this).attr('role') }, function (response) {
            if (response.success) {
                $dest.html(response.view);
                $dest.parents('.list-item').find('.user-role').html(response.role);
            }
        });
    });

/* communityEdit.js */
$k.communityEdit.id = id;
$('.tabs li').click(function () {
    if ($(this).hasClass('active'))
        return false;

    $k.communityEdit.initTab($(this).attr('tab'));

    $('.tabs li').removeClass('active');
    $(this).addClass('active');

    return false;
});
// -----
$k.communityEdit.initTab = function(tab) {
    switch (tab) {
    case '1':
        $.get($k.url.communityEditPersonalData, { id: $k.communityEdit.id }, function(response) {
            $('.tabs-holder').html(response);
        });
        break;
    case '2':
        $.get($k.url.communityEditAccountSettings, { id: $k.communityEdit.id }, function(response) {
            $('.tabs-holder').html(response);
            $k.ui.selectbox('#topics_privacy', $k.communityEdit.privacyOptionsSelected);
            $k.ui.selectbox('#followme_privacy', $k.communityEdit.privacyOptionsSelected);
        });
        break;
    default:
    }
};
// -----
$k.communityEdit.privacyOptionsSelected = function ($element) {
    var id = $element.parents('.select_box_1').attr('id');
    $('[select="' + id + '"]').val($element.attr('value'));
};
// -----
$k.communityEdit.setDailyInvitesCount = function (count) {
    $('#invites-daily-count').html(count);
    $('#static-invites-daily-count').val(count);

    if (count < $('#static-invites-once-count')) {
        $('#invites-once-count').html(count);
    } else {
        $('#invites-once-count').html($('#static-invites-once-count').val());
    }
}
/* home.js */
 $('.iosSlider').iosSlider({
            autoSlideTimer: 4000,
            autoSlideTransTimer: 2000,
            snapToChildren: true,
            autoSlide: true,
            desktopClickDrag: true,
            navPrevSelector: prev,
            navNextSelector: next,
            infiniteSlider: true,
            navSlideSelector: scope.sliderSelectors,
            onSlideChange: scope.slideChange,
            onSlideStart: scope.slideStart,
            onSlideComplete: scope.slideComplete
        });
// Вызов такой простыни параметров лучше выносить в отдельный модуль

/* itemList.js */        
$k.itemList.url;
$k.itemList.pageUrl;
$k.itemList.containerSelector;
$k.itemList.params = {};
$k.itemList.reloadCallback;
$k.itemList.pageChangedCallback

/* list.js */
$(document).on('click', $k.list.containerSelector + ' .moreOpinions', function() {
        var $container = $(this).parents('.list-item').find('.slideBody');
        $container.toggle();
        $(this).children('.show-more-opinions').toggleClass('hidden');
        $(this).children('.hide-more-opinions').toggleClass('hidden');
        return false;
    });
// -----
$k.profile.initTab = function(tab, subtab) {
    switch (tab) {
    case '1':
        $.get($k.url.profileTopicsTab, { id: $k.profile.id }, function(response) {

            $('.tabs-holder').html(response);
            $k.list.params.page = 1;
        });
        break;
    case '2':
        $.get($k.url.profileInterestsTab, { id: $k.profile.id }, function(response) {

            $('.tabs-holder').html(response);
            $k.profile.interestAutocomplete();
        });
        break;
    case '3':
        $.get($k.url.profileFollowersTab, { id: $k.profile.id, tab: subtab }, function(response) {
            $('.tabs-holder').html(response);
            $k.usersList.params.page = 1;
            $k.usersList.params.tab = subtab;
        });
        break;
    case '4':
        $.get($k.url.profileCommunitiesTab, { id: $k.profile.id, tab: subtab }, function(response) {
            $('.tabs-holder').html(response);
            $k.communitiesList.params.page = 1;
            $k.communitiesList.params.tab = subtab;
        });
    }
};
/* signin.js */
$k.signin.init = function () {
    function clearValidationErrors() {
        $('#signin_form').find(".field-validation-error").empty();
    };

    $('#SigninEmail').focus(clearValidationErrors);
    $('#SigninPassword').focus(clearValidationErrors);
};

/* tagsIndex.js */
$('.category:not(.communities-category)').click(function () {
        var id = $(this).attr('tag-id');

        if (!$k.tagsList.params.catIds)
            $k.tagsList.params.catIds = [];

        if ($(this).hasClass('checked')) {
            $k.tagsList.params.catIds.splice($k.tagsList.params.catIds.indexOf(id), 1);
            $(this).removeClass('checked');
        }
        else {
            $k.tagsList.params.catIds.push(id);
            $(this).addClass('checked');
        }

        $k.tagsList.params.page = 1;
        $k.tagsList.reloadList();
    });

/* topicRatings.js */
$k.topicRatings = {};

$k.topicRatings.init = function () {
    if ($k.topicRatings.initialized)
        return false;
    else
        $k.topicRatings.initialized = true;

    $(document).on('click', '.rating-button.clickable', function () {
        var $holder = $(this).parents('.statistics');

        $.post($k.url.topicSetRating, { id: $holder.attr('item-id'), rating: $(this).attr('data') }, function (response) {
            if (response.success) {
               // $holder.html(response.view);
            }
        });
    });
}

/* topicsEdit.js */
$k.ui.uploadDocument(
    'pickdocument',
    function (response) {
        $('#document-id').val(response.id);
        $('#document-filename').html(response.filename);
        $('#document-filename').removeClass('hidden');
        $('#document-description').addClass('hidden');
        $('#pickdocument').addClass('hidden-important');
        $('#delete-document').removeClass('hidden');
    });
// -----
var $linkInput = input;
var $videoTitle = $('#video-title');
var $videoThumbnail = $('#video-thumbnail');
var $videoHolder = $('#video-holder');
var $videoError = $('#video-error');
var $videoHidden = $('#video-hidden');
var url = $linkInput.val();


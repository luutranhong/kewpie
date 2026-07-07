// include header and footer
$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'https://songhantourist.com/test/tour-online-kagoshima/views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})
$(function () {
    $('#logistic-modal-4').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper').attr('data-iframe-src');
        $('#videowrapper').attr('src', src);
    });

    $('#logistic-modal-4').on('hidden.bs.modal', function (e) {
        $('#videowrapper').attr('src', '');
    });
});











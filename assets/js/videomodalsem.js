$(function () {
    $('#event-modal-1').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper4').attr('data-iframe-src');
        $('#videowrapper4').attr('src', src);
    });

    $('#event-modal-1').on('hidden.bs.modal', function (e) {
        $('#videowrapper4').attr('src', '');
    });
});
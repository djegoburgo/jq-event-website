$(function () {
    $('#event-modal-4').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper6').attr('data-iframe-src');
        $('#videowrapper6').attr('src', src);
    });

    $('#event-modal-4').on('hidden.bs.modal', function (e) {
        $('#videowrapper6').attr('src', '');
    });
});

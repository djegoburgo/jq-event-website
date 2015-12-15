$(function () {
    $('#event-modal-8').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper9').attr('data-iframe-src');
        $('#videowrapper9').attr('src', src);
    });

    $('#event-modal-8').on('hidden.bs.modal', function (e) {
        $('#videowrapper9').attr('src', '');
    });
});
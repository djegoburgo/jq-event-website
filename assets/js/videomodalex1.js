$(function () {
    $('#event-modal-2').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper5').attr('data-iframe-src');
        $('#videowrapper5').attr('src', src);
    });

    $('#event-modal-2').on('hidden.bs.modal', function (e) {
        $('#videowrapper5').attr('src', '');
    });
});


$(function () {
    $('#event-modal-3').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper3').attr('data-iframe-src');
        $('#videowrapper3').attr('src', src);
    });

    $('#event-modal-3').on('hidden.bs.modal', function (e) {
        $('#videowrapper3').attr('src', '');
    });
});

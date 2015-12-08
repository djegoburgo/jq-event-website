
$(function () {
    $('#event-modal-5').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper7').attr('data-iframe-src');
        $('#videowrapper7').attr('src', src);
    });

    $('#event-modal-5').on('hidden.bs.modal', function (e) {
        $('#videowrapper7').attr('src', '');
    });
});

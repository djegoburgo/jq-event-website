$(function () {
    $('#logistic-modal-2').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper10').attr('data-iframe-src');
        $('#videowrapper10').attr('src', src);
    });

    $('#logistic-modal-2').on('hidden.bs.modal', function (e) {
        $('#videowrapper10').attr('src', '');
    });
});
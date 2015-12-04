
$(function () {
    $('#logistic-modal-5').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper2').attr('data-iframe-src');
        $('#videowrapper2').attr('src', src);
    });

    $('#logistic-modal-5').on('hidden.bs.modal', function (e) {
        $('#videowrapper2').attr('src', '');
    });
});

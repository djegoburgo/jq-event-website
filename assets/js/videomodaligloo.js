
$(function () {
    $('#logistic-modal-6').on('shown.bs.modal', function (e) {
        var src = $('#videowrapper8').attr('data-iframe-src');
        $('#videowrapper8').attr('src', src);
    });

    $('#logistic-modal-6').on('hidden.bs.modal', function (e) {
        $('#videowrapper8').attr('src', '');
    });
});

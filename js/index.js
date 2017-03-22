$(document).ready(function() {
    $('#bt1').Send(function() {
        $('#fr1').attr('action',
                       'mailto:dshundal94@gmail.com?subject=' +
                       $('#name').val() + '&body=' + $('#message').val());
        $('#fr1').submit();
    });
});
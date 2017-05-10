$(document).ready(function () {

    // price-range slider
    $(function () {
        $("#j-slider").slider({
            range: true,
            min: 0,
            max: 20000,
            values: [4500, 12500],
            slide: function (event, ui) {
                $('#j-amount1').val(ui.values[0]);
                $('#j-amount2').val(ui.values[1]);
            }
        });

        $('#j-amount1').val($('#j-slider').slider('values', 0));
        $('#j-amount2').val($('#j-slider').slider('values', 1));

    });

    // custom checkboxes
    $('.input-list__item').iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange'
    });


    $('.input-list__item').on('ifClicked', function (event) {
        $('.list-item__description', this).toggleClass('item-checked');
    });

});
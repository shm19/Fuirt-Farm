$(document).ready(() => {
    $.ajax({
        method: 'GET',
        url: 'cards',
        success: function (data) {
            $('.cards-container').html(data);
        },
    });
});

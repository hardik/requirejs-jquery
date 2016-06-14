// Solution:
define('jquery', [], function() {
    return jQuery;
});

define(['jquery', 'jquery-ui'], function() {
    $('#message').html('jQuery has loaded once.');
});

// $(document).ready(function() {
//     $.get('/views/partials/header.html', function(res){
//         console.log(res);
//         $(".header").html(res);
//     });    
//     $.get('/views/partials/footer.html', function(res){
//         console.log(res);
//         $(".footer").html(res);
//     })
// });


$(document).ready(function() {
    $('.header').load('/views/partials/header.html');
    $('.footer').load('/views/partials/footer.html');
});


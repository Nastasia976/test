const User = {

   name: 'Vasya',

   getName: () => this.name

}

console.log( User.getName() );


$(document).ready(function () {
$('h1').click(function () {
        $('h2').toggleClass('active');
    });
});

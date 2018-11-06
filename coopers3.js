
//This changes the heading color on heading, when clicked. 
$const #topPart= document.getElementbyId('#topPart');

$#top-part.addEventListener('click' , () => {
   $#top-part.style.color ='red';
});


// highlight current day on opeining hours
$(document).ready(function() {
    $('.hours-of-operation li').eq(new Date().getDay()).addClass('today');
    });


// this line of code sets up your canvas
var r = new Rune({
  container: "body",
  width: '100%',
  height: '100%'
});
// write your own code below this line

r.rect(0,0,2000,2000)
 .stroke(false)
 .fill(255,0,0);
r.text("****CHINESE HEAVEN****", 500, 100)
  .stroke(0,0,255)
  .fill(0,0,255);


var img = r.image("http://www.animaltattoos.tattooshowtime.com/dragon-tattoos-designs-79.png",500,220,500,500);


$(document).ready(function(){

// || or
// != not equal
// && and
// ! not

//alert;


$("index").show();
  $("index").css({'color':'black', 'font-size': '100%', 'background': 'yellow'});
$("button2").hide();
$("button6").hide();
$("button3").hide();
$("button4").hide();
$("button").css({'color': 'yellow', 'font-size': '350%', 'background': 'black'});
$("button").on("click", function(){
        $("index").hide();
        $("button").toggle();
        var answer = prompt("Hello,this is CHINESE HEAVEN. Can I have your name please?");
        $("body").append( "Dear " + answer + ", I'm gonna help you find your Chinese food best match today." );
                 $("body").css({ 'color': 'greenyellow', 'font-size': '250%'});
        $( "button2" ).show();
                 $("button2").css({ 'color': 'yellow', 'font-size': '30%', 'background': 'black' });
});

$("button2").on("click", function(){
        $("button2").toggle();
        var answer2 = prompt("First Question: Rice or Noodle?");
            if (answer2 == "rice") {
              $("body").append("<br>Alrice, " + answer2 + '  <img src="http://allpng.com/wp-content/uploads/2016/06/Rice-3.png" height="150px" width="150px">');}
            if (answer2 == "noodle") {
              $("body").append("<br>Wowdle, " + answer2 + '  <img src="http://www.dintaifung.com.my/wp-content/uploads/2015/10/Plain-Noodle-with-Sauce.png" height="150px" width="150px">');}
        $("button3").show();
              $("button3").css({ 'color': 'yellow', 'font-size': '30%', 'background': 'black' });

});

$("button3").on("click", function(){
        $("button3").toggle();
        var answer3 = prompt("Second Question: Plain or Spicy?");
            if (answer3 == "plain") {
              $("body").append("<br>Really? That's kinda boring but okay " + answer3 + '  <img src="https://media.giphy.com/media/E0KKenSddWzte/giphy.gif" height="300px" width="600px">');}
            if (answer3 == "spicy") {
              $("body").append("<br>YAS,FIRE! " + answer3 + '  <img src="http://bestanimations.com/Nature/Fire/simpsons-fire-gif.gif" height="300px" width="400px">');}
        $("button4").show();
              $("button4").css({ 'color': 'yellow', 'font-size': '30%', 'background': 'black' });
});

$("button4").on("click", function(){
        $("button4").toggle();
        var answer4 = prompt("Last Question: Chicken, Beef, Veggie or Shrimp?");
            $("body").append("<br>" + answer4 + ",okay, good choice. Calculating the result for you...");
            $("button6").show();
              $("button6").css({ 'color': 'yellow', 'font-size': '30%', 'background': 'black' });
});

$("button6").on("click", function(){
        $("button6").toggle();
        alert("Your taste is TOO SPECIAL it CRUSHED MY PAGES, HEHE.")
        $("body").append("<br><br>What about just check out CHINESE HEAVEN in person?<br>We're at 888 Lucky St., Brooklyn, NY, 11288 <br>Waiting for you, hehe.");

 });

  });

r.draw();

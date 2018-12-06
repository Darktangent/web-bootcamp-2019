
$("h1").text("Hola")

$("button").text("<em></em>")
$("a").attr("href","http://www.yahoo.com")
$("h1").click(()=>{
    $("h1").css("color","purple")
})

$("button").click(function(){
    $("h1").css("color","blue")
})

$("input").keypress(function (e) { 
$("h1").text(e.key)    
});


$("h1").click(function (e) { 
    e.preventDefault();
    $("h1").hide()
    
});
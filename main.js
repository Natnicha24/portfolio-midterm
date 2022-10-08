window.onload = pageLoad;

function pageLoad(){
    var cinamon=document.getElementById("cinamon");
    var blog=document.getElementById("blog");
    var regis=document.getElementById("regis");
    var game=document.getElementById("game")
    var project=document.getElementById("project")
    cinamon.onclick=cinamonpage;
    blog.onclick=blogpage;
    regis.onclick=regispage;
    game.onclick=gamepage;
    project.onclick=projectpage;
}
function cinamonpage(){
    // var cinamon=document.getElementById("cinamon");
    onclick=location.href='assignment3/recipe.html';
}
function blogpage(){
    // var blog=document.getElementById("blog");
   onclick=location.href='assignment5/index.html';
}
function regispage(){
    // var regis=document.getElementById("regis");
    onclick=location.href='assignment6/assignment6/register.html';
}
function gamepage(){
    // var game=document.getElementById("game");
   onclick=location.href='assignment7/assignment7/index.html';
}
function projectpage(){
   onclick=location.href='project.html';
}

var Button1 = document.getElementById("button1");
var Button2 = document.getElementById("button2");
var head1 = document.getElementById("hd1");
var head2 = document.getElementById("hd2");
function button1display(){
    head1.innerHTML="You've Clicked on";
    head2.innerHTML="Button1";
};
function button2display(){
        head1.innerHTML="You've Clicked on";
        head2.innerHTML="Button2";
};

Button1.onclick=function(){
    button1display();
};
Button2.onclick=function(){
    button2display();
};

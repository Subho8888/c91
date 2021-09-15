var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question").innerHTML="Question Turn -"+ player1_name;
document.getElementById("answer").innerHTML="Answer Turn -"+ player2_name;

function send(){
    get_word=document.getElementById("w").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase="+word);;
    
    CharAt1=word.charAt(1);
    console.log(CharAt1);
    length_divide_2=Math.floor(word.length/2);

    var CharAt2=word.charAt(length_divide_2);
        console.log(CharAt2);

        length_minus_1=word.length-1;
        CharAt3=word.charAt(length_minus_1);
        console.log(CharAt3);
    
    remove_CharAt1=word.replace(CharAt1," _ ");
    remove_CharAt2=remove_CharAt1.replace(CharAt2," _ ");
    remove_CharAt3=remove_CharAt2.replace(CharAt3," _ ");
    console.log(remove_CharAt3);

    question_word="<h4 id='word_display' Q.>"+remove_CharAt3+"</h4>";
    input_box="<br>Answer;<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("w").value="";

}
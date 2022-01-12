function addUser(){
    player1_name=document.getElementById("player1").value; 
    player2_name=document.getElementById("player2").value;                  
    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);
    window.location="game_page.html";
}
player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("player?").innerHTML="question turn-"+player1_name;
document.getElementById("playerA").innerHTML="answer turn-"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_anser=parseInt(number1) * parseInt(number2)
    question_word="<h4 id='word_display'>q."+number1+"X"+number2+"</h4>";
    input_box="<br> answer:<input id='input_check_box'>";
    cheak_button="<br> <button onclick='check()'class='btn btn-info'>check</button>";
    row=question_word+input_box+cheak_button;
    document.getElementById("output").innerHTML=row;
}
question_turn = "player1"; answer_turn = "player2";
function check(){

    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_anser){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
else{
    player2_score=player2_score+1;
            document.getElementById("player2score").innerHTML=player2_score;
}
    }if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player?").innerHTML="question turn- "+player2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player?").innerHTML="question turn- "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("playerA").innerHTML="answer turn- "+player2_name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("playerA").innerHTML="answer turn- "+player1_name;
    }
    
    }
    



function add_User()
{
    player_1_name=document.getElementById("player1_nameinput").Value;
    player_2_name=document.getElementById("player2_nameinput").Value;
    localStorage.setItem("player1_name",player_1_name);
    localStorage.setItem("player2_name",player_2_name);
    window.location="game_page.html";
}
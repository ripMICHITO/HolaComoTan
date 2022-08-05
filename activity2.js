function back() {
    windows.location="activity_1.html" ; 

}
function getScore() {
    score=locatioStorage.getItem("score") ;
    document.getElementById("update").innerHTML="<h1>Score: "+score+"</h1>" ;

}

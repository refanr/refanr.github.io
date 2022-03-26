let orgCont = true;
let orgText = "My name is Reynir and I am on my third year of software engineering BSc.";

function bio() {
    if (orgCont) {
    document.getElementById("contcont").innerHTML = "Short Biography";
    orgCont = false;
    } else {
        document.getElementById("contcont").innerHTML = orgText;
        orgCont = true;
    }
}
function exp() {
    if (orgCont) {
        document.getElementById("contcont").innerHTML = "Experience";
        orgCont = false;
        } else {
            document.getElementById("contcont").innerHTML = orgText;
            orgCont = true;
        }
}
function edu() {
    if (orgCont) {
        document.getElementById("contcont").innerHTML = "Education";
        orgCont = false;
        } else {
            document.getElementById("contcont").innerHTML = orgText;
            orgCont = true;
        }
}
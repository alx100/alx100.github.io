 function check_filled_trolley() {
    var inputVal = document.getElementById("id_trolley").value;
    if (inputVal!=="") {document.getElementById("id_action_point_trolley").style.backgroundColor = "#ee3643";
        document.getElementById("id_trolley").style.backgroundColor = "#ee3643";
    }
    if (inputVal==""||inputVal=="0") {document.getElementById("id_action_point_trolley").style.backgroundColor = "#293449";
        document.getElementById("id_trolley").style.backgroundColor = "#293449";
    }
    
}

 function check_filled_bookmarks() {
    var inputVal = document.getElementById("id_bookmarks").value;
    if (inputVal!=="") {document.getElementById("id_action_point_bookmarks").style.backgroundColor = "#ee3643";
        document.getElementById("id_bookmarks").style.backgroundColor = "#ee3643";
    }
    if (inputVal==""||inputVal=="0") {document.getElementById("id_action_point_bookmarks").style.backgroundColor = "#293449";
        document.getElementById("id_bookmarks").style.backgroundColor = "#293449";
    }
}
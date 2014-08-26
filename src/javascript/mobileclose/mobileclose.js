define(function () {
    var viewdetailsBtn = document.getElementsByClassName("viewdetails_btn");
    var mToggle = document.getElementsByClassName("m-toggle");
    var close_btn = document.getElementsByClassName("close_btn");
    var isshow;
    var startX;
    var startY;

    for (var j = 0; j < mToggle.length; j++) {
        viewdetailsBtn[j].index = close_btn[j].index = j;
        if (toString(mToggle[j].style.display) == "block") {
            isshow = true;
        } else {
            isshow = false;
        }

        viewdetailsBtn[j].ontouchend = function () {
            console.log(2);
            toggle_mToggle(this);
        }
        close_btn[j].ontouchend = function () {
            toggle_mToggle(this);
        }
    }

    function toggle_mToggle(that) {
        if (isshow) {
            mToggle[that.index].style.display = "none";
            isshow = false;
        } else {
            mToggle[that.index].style.display = "block";
            isshow = true;
        }
    }
})



function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkill = document.getElementById("memberSkill");
    var memberSkillValue = memberSkill.options[memberSkill.selectedIndex].value;
    var memberSkillText = memberSkill.options[memberSkill.selectedIndex].text;

    if (memberValue == "member") {
        document.getElementById("memberSkill").disabled = true;
        document.getElementById("memberSkill").selectedIndex = 0;
    } else {
        document.getElementById("memberSkill").disabled = false;
    }
}
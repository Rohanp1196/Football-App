$(function () {
    $("#dvSource img").draggable({
        revert: "invalid",
        refreshPositions: true,
        drag: function (event, ui) {
            ui.helper.addClass("draggable");
        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggable");
            var image = this.src.split("/")[this.src.split("/").length - 1];
            if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                alert("Player added");
               
            }
            else {
                alert("Player not added");
               
            }
        }
    });
    $("#dvDest").droppable({
        drop: function (event, ui) {
            if ($("#dvDest img").length == 0) {
                $("#dvDest").html("");
            }
            ui.draggable.addClass("dropped");
            $("#dvDest").append(ui.draggable);
           
        }
    });
});

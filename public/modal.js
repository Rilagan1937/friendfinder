$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();

        function validateForm() {
            var validEntry = true;
            $('.form-control').each(function () {
                if ($(this).val() === "") {
                    validEntry = false;
                }
            });

            $('.custom-select mr-sm-2').each(function () {
                if ($(this).val === "") {
                    validEntry = false;
                }

            });
            return validEntry;
        }
        if (validateForm()){

        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]

        };

        $('#resultsModal').on('click', function () {
            $('#resultsModal').modal("hide");

        });

        $.post("api/friends", userData).then(function (data) {

            $('#matchName').html(data.matchName);
            $("#matchImage").attr("src", data.matchImage);
            $('#resultsModal').modal(open);
        });

    } else{
        alert("You're not done filling out the form!");
    }
    });
});




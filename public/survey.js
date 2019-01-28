// Capture the form inputs
$("#submit-form").on("click", (event) => {
	event.preventDefault();
	console.log('Checking to submit...');

	if (!$("#firstName").val()) {
	// 	alert("Please enter your name before submitting.");
		$('#no-name-entered').removeClass("invisible");
		$('#firstName').addClass("border-danger");
		$('#firstName').focus();
		return;
	} else {
		$('#no-name-entered').addClass("invisible");
		$('#firstName').removeClass("border-danger");
	}
	
	// User Data Object:
	var userData = {
		name: $("#firstName").val(),
		photo: $("#profilePic").val(),
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
	console.log('User data:', userData);
	// post the data (w/ AJAX) to the friends API:
	$.post("/api/friends", userData, (data) => {
		$("#friend-name").text(data.name);
		$("#friend-img").attr("src", data.photo);
		const modalTitle = $("#firstName").val() + "'s closest match:"
		$("#match-modal-title").text(modalTitle);
		$("#results-modal").modal("show");
	});
});
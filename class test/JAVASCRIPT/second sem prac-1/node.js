function calculateResult() {
    var subjects = document.getElementById("sub").value;
    var total = 0;

    for (var i = 1; i <= subjects; i++) {
        var marks = prompt("Enter marks of subject " + i);
        total = total + Number(marks);
    }

    var average = total / subjects;

    var grade, result;

    if (average >= 60) {
        grade = "A";
        result = "Pass";
    } else if (average >= 50) {
        grade = "B";
        result = "Pass";
    } else if (average >= 40) {
        grade = "C";
        result = "Pass";
    } else {
        grade = "D";
        result = "Fail";
    }

    document.getElementById("output").innerHTML =
        "Total Marks = " + total + "<br>" +
        "Average Marks = " + average + "<br>" +
        "Grade = " + grade + "<br>" +
        "Result = " + result;
}
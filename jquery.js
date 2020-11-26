$(document).ready(function () {
    $('#nav-header').load('./nav-header.html');

    $('#btnClear').click(() => clearDetails()
    )

    $("#btnLogin").click(() => Validate(showToDo)
    )

    function logout()
    {
 
        clearDetails();
        alert("Logout Successfully");
        window.location.href = "index.html";
        
    }
    function Validate(callback) {
        if ($("#uName").val() == "admin" && $("#uPassword").val() == "12345") {
            callback();
        }
        else {
            alert("Invalid Credentials, Try Again");
            clearDetails();
        }

    }

    function showToDo() {
        window.location.href = "ToDoList.html";
    }

    function clearDetails() {
        $("#uName").val('');
        $("#uPassword").val('');
    }

    let btnGetTodo = document.getElementById("#btnTodo");
    $("#btnTodo").click(function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                var result = "";
                for (var i = 0; i < obj.length; i++) {
                    result += '<input type="checkbox" id ="todo" name="todo_name" value="' + obj[i].title + '">' + obj[i].title + '<br></input>';
                }
                document.getElementById("demo").innerHTML = result;
                console.log(result);
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
    }
    )


    $(function () {
        $(document).on("change", ":checkbox", function () {
            //   var numberOfChecked = $('input:checkbox:checked').length;
            //   if (numberOfChecked ==5) {
            //     alert("Congrats. 5 Tasks have been Successfully Completed");
            //   }

            var promise = new Promise(function (resolve, reject) {
                var numberOfChecked = $('input:checkbox:checked').length;
                if (numberOfChecked == 5) {
                    resolve("   Congrats. 5 Tasks have been Successfully Completed");
                }
            });

            promise.then(function (s) {
                alert(s);
            })



        });
    });


})


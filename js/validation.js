function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["psw"].value;
    if (y == "admin" && x == "admin") 
    {
        alert("successfully logged in!");

        return true;
    }else{
         alert("invalid password or username");
        return false;
    }

  }
  function myFunction() {
    var y= document.getElementById("myInput");
    if (y.type === "psw") {
      y.type = "text";
    } else {
      y.type = "psw";
    }
  }

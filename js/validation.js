<script>
    function validateForm() {
  let x = document.forms["myform"]["uname"].value;
  let y= document.forms["myForm"]["psw"].value;
  if (x == "admin")
  if (y == "12345")
  
  {
    alert("incorrect username or password");
    return false;
  }
}
  </script>
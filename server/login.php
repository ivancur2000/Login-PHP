<?php
require('./dataBase.php');

$email = $_POST['email'];
$password = $_POST['password'];

if (isset($email) && isset($password)) {
  $sql = "SELECT * FROM ususarios 
  WHERE email = '" . $email . "' AND 
  password = '" . $password . "'";

  $query = $conn->query($sql);

  if ($query->num_rows > 0) {
    echo 'logueo exitoso';
  } else {
    echo 'Ususario no registrado';
  }
}

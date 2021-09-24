<?php

$server = 'localhost';
$userName = 'root';
$password = 'hola123';
$dataBase = 'login2';

$conn = new mysqli($server, $userName, $password, $dataBase);

if ($conn->connect_error) {
  die("Oh no tu conexion ha fallado PELOTUDO: " . $conn->connect_error);
}

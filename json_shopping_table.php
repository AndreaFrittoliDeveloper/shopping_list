<?php

if(isset($_REQUEST["name"])){

  $nome = $_REQUEST["name"];

  $mysqli = connessioneDB();

  $query = "INSERT INTO shopping_list.lista_spesa (nome) ".
           "VALUES('".$nome."')";

  $mysqli->query($query);




}else if(isset($_REQUEST["nam"])){

  $nome = $_REQUEST["nam"];

  $mysqli = connessioneDB();

  $query = "DELETE FROM shopping_list.lista_spesa WHERE nome = '".$nome."'";

  echo json_encode( array( 'output' => array('troia' => $query)));

  $mysqli->query($query);

}else{
  error_log("campi non settati");
}


function connessioneDB(){
 $db_user = 'root';
 $db_name = 'shopping_list';
 $db_host = 'localhost:8889';
 $password = 'root';

 $mysqli = new mysqli($db_host, $db_user, $password, $db_name);

 return $mysqli;
}
 ?>

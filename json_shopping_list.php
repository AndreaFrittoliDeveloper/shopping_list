<?php
$lista = array();
$lista = getLista();


echo json_encode( array( 'output' => array('lista' => $lista)));


function getLista(){
  $mysqli = connessioneDB();

  $lista = array();

  $query = "SELECT nome AS NOME FROM shopping_list.lista_spesa";

    if ($is_query_run = $mysqli->query($query)){

        while ($row = mysqli_fetch_object ($is_query_run)){
            $lista[] = $row->NOME;
        }

    }else{
        echo "Error in execution";
    }


  return $lista;
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

<?php
    error_reporting(E_ALL^E_DEPRECATED);
    header('content-type:text/html; charset=utf-8');
    $con = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT, SAE_MYSQL_USER, SAE_MYSQL_PASS);
    mysql_query('set names "utf8"');
    mysql_select_db(SAE_MYSQL_DB, $con);

    $arr2 = array();
    $sql = 'SELECT * FROM cloth_table';
    $interval = mysql_query($sql);
    while ($row = mysql_fetch_assoc($interval)) {
        $arr = array();
        array_push($arr, $row['user_name'], $row['address'], $row['tel'], $row['msg'], $row['service'], $row['time']);
        array_push($arr2, $arr);
    }

    echo json_encode($arr2);
    mysql_close($con);
?>
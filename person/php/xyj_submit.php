<?php
    error_reporting(E_ALL^E_DEPRECATED);
    header('content-type:text/html; charset=utf-8');
    $con = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT, SAE_MYSQL_USER, SAE_MYSQL_PASS);
    mysql_query('set names "utf8"');
    mysql_select_db(SAE_MYSQL_DB, $con);

    $sql1 = 'CREATE TABLE if not exists cloth_table (
                user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                user_name CHAR(40) NOT NULL,
                address CHAR(40) NOT NULL,
                tel CHAR(40) NOT NULL,
                msg CHAR(40) NOT NULL,
                service CHAR(40) NOT NULL,
                time CHAR(40) NOT NULL
            )';
    $err1 = mysql_query($sql1);

    if (!$err1) {
        die(mysql_error());
    }

    $user_name = $_REQUEST['user_name'];
    $address = $_REQUEST['address'];
    $tel = $_REQUEST['tel'];
    $msg = $_REQUEST['msg'];
    $service = $_REQUEST['service'];
    $time = $_REQUEST['time'];

    $sql2 = "INSERT INTO cloth_table 
            (user_name, address, tel, msg, service, time)
            VALUES
            ('$user_name', '$address', '$tel', '$msg', '$service', '$time')";
    mysql_query($sql2);

    mysql_close($con);
?>

<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>您的被子有着落啦</title>

    <!-- Bootstrap -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/xyj.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h3>你好,你的订单已提交成功,我们的收被子人员会与您取得联系,商量如何进门和如何付款,感谢您的信任</h3>
    <div>
        收被子人员: <img src="../images/xyj.png" width="100" height="100" id="people"> 正在赶来~
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="../js/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../js/bootstrap.js"></script>
  </body>
</html>
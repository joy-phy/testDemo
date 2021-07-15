    <?php
    // 1. 接收数据
    // 2. 连接数据库
    // 3. 查询用户名和密码是否匹配
    // 查询到结果 表示 登陆成功
    // 没有查询结果 表示 登陆失败

    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where username='$username' and password='$password'";
    $sql1 = "select * from users where username='$username'";
    $result =  $mysqli->query($sql);
    $res1 =   $mysqli->query($sql1);


    if ($result->num_rows > 0) {
        echo '<script>alert("登陆成功");</script>';
        $mysqli->close();
    } else {
        if ($res1->num_rows > 0) {
            echo '<script>alert("密码错误");</script>';
            $mysqli->close();
            die();
        } else {
            echo '<script>alert("用户名错误，注册一个吧");</script>';
            echo '<script>location.href="../src/html/regitser.html";</script>';
        }
    }

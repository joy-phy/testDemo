<?php

// 2.连接数据库
include('./library/conn.php'); // 导入文件

// 注册的逻辑
// 1. 接收用户传递的信息
// 2. 连接数据库
// 3. 查询数据库中的数据
//    用户名是否存在 如果存在 注册失败 返回注册页面
//    用户名不存在  注册成功 将数据写入数据库 返回首页

// 1. 接收数据
$username1 = $_REQUEST['username'];
$password1 = $_REQUEST['password'];

// 3.查询用户名是否存在
$sql = "select * from users where username='$username1'";

// 执行查询操作
$res = $mysqli->query($sql);

// 判断用户名存在的情况
if ($res->num_rows > 0) {
    echo '<script>alert("用户名已存在");</script>';
    echo '<script>location.href="../src/html/regitser.html";</script>';
    $mysqli->close(); // 断开连接
    die();
}


// 用户名不存在的情况 

// 插入数据
$insert = "insert into users (username,password) values ('$username1','$password1')";

// 执行插入操作
$result = $mysqli->query($insert); // 返回布尔值

$mysqli->close();

if ($result) {
    echo '<script>alert("注册成功");
    location.href="../src/html/index.html"
    </script>';
    die();
}

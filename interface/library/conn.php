<?php
header('content-type:text/html;charset=utf-8');

$mysql_conf = array(
    'host' => 'localhost:3306', //主机名
    'db_user' => 'root', //数据库用户名
    'db_pass' => 'root', //数据库登录密码
    'db' => 'mi.com' //数据库名称

);
//登录（连接）数据库
$mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pass']);
if ($mysqli->connect_errno) {
    die('连接错误' . $mysqli->connect_errno);
};
$mysqli->query('set names utf8');
$select_db = $mysqli->select_db($mysql_conf['db']);
if (!$select_db) {
    die('数据库连接错误' . $mysqli->error);
};

<?php
$arr = array();
$arr["time"] = "2016-08-17 17:17:03";
$arr["status"] = 1;
$arr["msg"] = "";
$arr["data"][0] = "188****1234(杭州研发中心)抽中了50个移动币";
$arr["data"][1] = "188****1122(杭州研发中心)抽中了代金卷";
$arr["data"][2] = "188****1255(杭州研发中心)抽中了儿童手表";
$arr["data"][3] = "188****1266(杭州研发中心)抽中了50个移动币";
$arr["data"][4] = "188****1288(杭州研发中心)抽中了召唤令";
$arr["data"][5] = "188****1299(杭州研发中心)抽中了50个移动币";


$data = $data = json_encode($arr);
echo $data;

?>
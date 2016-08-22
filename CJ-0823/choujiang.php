<?php
$arr = array();
$arr["time"] = "2016-08-17 17:17:03";
$arr["status"] = 1;
$arr["msg"] = "";
$arr["data"]["tokenStatus"] = "1111";
$arr["data"]["morningCount"] = 0;
$arr["data"]["afternoonCount"] = 1;
$arr["data"]["coinLuckCount"] = 19;
$arr["data"]["cmccCoin"] = 100;
$arr["data"]["reward"]["key"] = "zhaohuanling";
$arr["data"]["reward"]["name"] = "";
$arr["data"]["reward"]["price"] = "";
$arr["data"]["reward"]["hasUniqueKey"] = false;
$arr["data"]["reward"]["uniqueKey"] = "";

$data = $data = json_encode($arr);
echo $data;

?>
<?php
$arr = array();
$arr["time"] = "2016-08-17 17:17:03";
$arr["status"] = 1;
$arr["msg"] = "";
$arr["data"]["tokenStatus"] = "1110";
$arr["data"]["morningCount"] = 1;
$arr["data"]["afternoonCount"] = 0;
$arr["data"]["coinLuckCount"] = 1;
$arr["data"]["cmccCoin"] = 20;
$arr["data"]["isTiger"] = false;

$data = json_encode($arr);
echo $data;
?>
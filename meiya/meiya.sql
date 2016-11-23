/*
 Navicat Premium Data Transfer

 Source Server         : meiya
 Source Server Type    : MySQL
 Source Server Version : 50505
 Source Host           : localhost
 Source Database       : meiya

 Target Server Type    : MySQL
 Target Server Version : 50505
 File Encoding         : utf-8

 Date: 11/23/2016 09:42:53 AM
*/

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `ads`
-- ----------------------------
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `ninepic`
-- ----------------------------
DROP TABLE IF EXISTS `ninepic`;
CREATE TABLE `ninepic` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT 'id号，自增的',
  `pids` varchar(2048) NOT NULL COMMENT '图片的链接地址，用逗号分隔开',
  `visible` int(1) NOT NULL DEFAULT '1' COMMENT '可见性，0表示不可见，1表示可见。默认为1',
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `author` varchar(255) DEFAULT NULL COMMENT '作者',
  `authorLink` varchar(255) DEFAULT NULL COMMENT '点击作者名字进入跳转的链接',
  `description` varchar(255) DEFAULT NULL COMMENT '配图文字',
  `favs` int(16) NOT NULL DEFAULT '0' COMMENT '点赞数',
  `avatar` varchar(255) NOT NULL,
  `original` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `ninepic`
-- ----------------------------
BEGIN;
INSERT INTO `ninepic` VALUES ('1', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j20', '1', '2016-11-10 16:56:56', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('2', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j20', '1', '2016-11-10 16:57:01', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0');
COMMIT;

-- ----------------------------
--  Table structure for `singlepic`
-- ----------------------------
DROP TABLE IF EXISTS `singlepic`;
CREATE TABLE `singlepic` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT 'id号，自增的',
  `pid` varchar(1024) NOT NULL COMMENT '图片的链接地址',
  `visible` int(1) NOT NULL DEFAULT '1' COMMENT '可见性，0表示不可见，1表示可见',
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `singlepic`
-- ----------------------------
BEGIN;
INSERT INTO `singlepic` VALUES ('1', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 16:35:51');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `authority` int(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;

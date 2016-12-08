/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50505
 Source Host           : localhost
 Source Database       : meiya

 Target Server Type    : MySQL
 Target Server Version : 50505
 File Encoding         : utf-8

 Date: 12/08/2016 10:00:06 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `ads`
-- ----------------------------
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) DEFAULT NULL,
  `addTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `ads`
-- ----------------------------
BEGIN;
INSERT INTO `ads` VALUES ('1', 'a15b4afegw1f938pm4oo6j20ki03kmxr', '2016-12-06 11:42:31', 'ninepic'), ('2', 'a15b4afegw1f938pm4oo6j20ki03kmxr', '2016-12-06 11:42:31', 'wildpic'), ('3', 'a15b4afegw1f938pm4oo6j20ki03kmxr', '2016-12-06 11:42:31', 'petpic');
COMMIT;

-- ----------------------------
--  Table structure for `keywords`
-- ----------------------------
DROP TABLE IF EXISTS `keywords`;
CREATE TABLE `keywords` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `keyword` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `keywords`
-- ----------------------------
BEGIN;
INSERT INTO `keywords` VALUES ('1', '莫名其妙'), ('2', '搞笑');
COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `ninepic`
-- ----------------------------
BEGIN;
INSERT INTO `ninepic` VALUES ('1', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-10 16:56:56', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('2', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-10 16:57:01', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('3', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:31', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('4', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:32', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('5', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:33', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('6', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:34', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('7', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:35', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('8', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:36', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('9', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:37', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('10', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:38', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('11', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:39', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('12', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:40', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('13', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:41', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('14', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:42', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('15', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:43', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('16', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:44', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('17', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:45', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('18', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:46', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('19', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:47', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('20', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:48', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('21', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:49', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1'), ('22', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:50', '你丫才美工', 'www.baidu.com', '测试', '666', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('23', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:51', '你丫才黄瓜', 'www.helloli.net', '黄瓜测试', '888', 'a15b4afegw1f550ema2v8j203i03imx3', '0'), ('24', 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-16 18:55:52', '测试', 'baidu.com', '测', '330', 'a15b4afegw1f550ema2v8j203i03imx3', '1');
COMMIT;

-- ----------------------------
--  Table structure for `petpic`
-- ----------------------------
DROP TABLE IF EXISTS `petpic`;
CREATE TABLE `petpic` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT 'id号，自增的',
  `pid` varchar(1024) NOT NULL COMMENT '图片的链接地址',
  `visible` int(1) NOT NULL DEFAULT '1' COMMENT '可见性，0表示不可见，1表示可见',
  `addTime` date NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `petpic`
-- ----------------------------
BEGIN;
INSERT INTO `petpic` VALUES ('1', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('2', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('3', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('4', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('5', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('6', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('7', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('8', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('9', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('10', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('11', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('12', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('13', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('14', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('15', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('16', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('17', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('18', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('19', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('20', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('21', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-02'), ('22', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-01'), ('23', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-01'), ('24', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-01'), ('25', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-02');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `authority` int(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', 'admin', 'admin123', '1'), ('2', 'test', 'test', '0'), ('3', 'ee', 'eeee', '0'), ('4', 'aa', 'aa', '0'), ('5', 'qq', 'qq', '0'), ('6', 'rr', 'rr', '0'), ('7', 'qqqqqqq', 'q', '0'), ('8', 'xx', 'xxx', '0'), ('9', 'eew', 'eew', '0'), ('10', 'qq', '123', '0'), ('11', 'qq', 'qq', '0');
COMMIT;

-- ----------------------------
--  Table structure for `wildpic`
-- ----------------------------
DROP TABLE IF EXISTS `wildpic`;
CREATE TABLE `wildpic` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT 'id号，自增的',
  `pid` varchar(1024) NOT NULL COMMENT '图片的链接地址',
  `visible` int(1) NOT NULL DEFAULT '1' COMMENT '可见性，0表示不可见，1表示可见',
  `addTime` date NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `wildpic`
-- ----------------------------
BEGIN;
INSERT INTO `wildpic` VALUES ('1', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('2', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('3', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('4', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('5', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('6', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('7', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('8', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('9', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('10', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('11', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-06'), ('12', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('13', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('14', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('15', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('16', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-03'), ('17', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('18', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('19', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('20', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-04'), ('21', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-02'), ('22', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-01'), ('23', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-01'), ('24', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-11-01'), ('25', 'a15b4afegw1f550ema2v8j203i03imx3', '1', '2016-12-02');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

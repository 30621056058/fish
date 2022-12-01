/*
Navicat MySQL Data Transfer

Source Server         : mianshi
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : ms

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2022-12-01 17:20:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for a
-- ----------------------------
DROP TABLE IF EXISTS `a`;
CREATE TABLE `a` (
  `A_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '提问',
  `A_title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '标题',
  `A_status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '0公开1私人2朋友',
  `A_delete` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '0未删除1已删除',
  `A_add_time` datetime DEFAULT NULL,
  PRIMARY KEY (`A_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of a
-- ----------------------------
INSERT INTO `a` VALUES ('1', 'java', '0', '0', null);
INSERT INTO `a` VALUES ('2', 'python', '0', '0', null);
INSERT INTO `a` VALUES ('3', 'C', '0', '0', null);
INSERT INTO `a` VALUES ('4', 'a', '0', '0', null);

-- ----------------------------
-- Table structure for b
-- ----------------------------
DROP TABLE IF EXISTS `b`;
CREATE TABLE `b` (
  `B_id` int(11) NOT NULL AUTO_INCREMENT,
  `A_id` int(11) DEFAULT NULL COMMENT '连接A表A_id',
  `user_id` int(11) DEFAULT NULL,
  `add_time` datetime DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 NOT NULL,
  `B_parents_id` int(11) DEFAULT '0' COMMENT '父ID',
  PRIMARY KEY (`B_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of b
-- ----------------------------
INSERT INTO `b` VALUES ('1', '1', '1000', null, 'jajajjajajaja', '0');
INSERT INTO `b` VALUES ('2', '1', '1000', null, 'sssssssssssss', '0');
INSERT INTO `b` VALUES ('3', '1', '1000', null, '清晰易懂，给你点个赞', '1');
INSERT INTO `b` VALUES ('4', '2', '10', null, '1', '0');

-- ----------------------------
-- Table structure for browserecords
-- ----------------------------
DROP TABLE IF EXISTS `browserecords`;
CREATE TABLE `browserecords` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `subjecttype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `difficulty` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `seevalue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `collection` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Leavingamessage` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `clock` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of browserecords
-- ----------------------------
INSERT INTO `browserecords` VALUES ('1', 'java', '前端', '简答题', '困难', '2011-1-1', '213', '12312', '213123', '12313', '123456');

-- ----------------------------
-- Table structure for child
-- ----------------------------
DROP TABLE IF EXISTS `child`;
CREATE TABLE `child` (
  `id` int(11) NOT NULL,
  `huif` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fathername` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `huifcontent` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `huiftitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of child
-- ----------------------------
INSERT INTO `child` VALUES ('1', 'asd', 'q', 'qbs', 'sad', 'sadas', 'sadsa', 'java', '2022-09-20 15:44:03');
INSERT INTO `child` VALUES ('2', 'sad', 'q', 'asd', 'sads', 'sd', 'sadas', 'java', '2022-09-13 16:15:29');

-- ----------------------------
-- Table structure for cishi
-- ----------------------------
DROP TABLE IF EXISTS `cishi`;
CREATE TABLE `cishi` (
  `id` int(11) NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cishi
-- ----------------------------
INSERT INTO `cishi` VALUES ('1', 'qq.jpg');

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `subjecttype` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `tag` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `views` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `toux` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `encounter` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('1', '1', '1', '1', '1', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `toux` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', 'sadasd', 'sadsad', 'qq.jpg', '123456', 'qq.jpg', '2022-08-24', '坤坤');
INSERT INTO `comment` VALUES ('2', 'ASD', 'SDFB', 'baidu.png', '123456', 'qq.jpg', '2022-08-24 ', '坤坤');
INSERT INTO `comment` VALUES ('28', 'zXZX', 'asdffgbhjklkjhgfds', 'qq.jpg', '123456', 'qq.jpg', '2022-08-25 ', '蔡徐坤忠实粉丝');

-- ----------------------------
-- Table structure for comment_table
-- ----------------------------
DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mainuser` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `head_portrait_main` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Grade_main` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment_time_main` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment_content_main` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `thumbs_up_main` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `replylist` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment_img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `father_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comment_table
-- ----------------------------
INSERT INTO `comment_table` VALUES ('1', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '1234');
INSERT INTO `comment_table` VALUES ('2', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('3', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('4', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('5', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('6', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('7', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('8', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('9', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('10', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('11', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('12', '123456', 'qq.jpg', '撒大苏打', '2022-11-04 23:45 ', 'asd', '0', null, 'asd', 'c语言关键字.png', '');
INSERT INTO `comment_table` VALUES ('13', '123456', 'qq.jpg', 'asdad', '2022-11-04 23.45', 'asdad', '0', null, 'sadasd', 'c语言关键字.png', '偶函数是y轴对称，奇函数是原点对称');
INSERT INTO `comment_table` VALUES ('14', '123456', 'qq.jpg', '撒大苏打', '2022-11-06 21:13 ', 'sdasds', '0', null, 'asdasd', '', '1234');

-- ----------------------------
-- Table structure for datalist
-- ----------------------------
DROP TABLE IF EXISTS `datalist`;
CREATE TABLE `datalist` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `subjecttype` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '题目类型',
  `tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '标签',
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '标题',
  `difflcult` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '难度',
  `time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '时间',
  `views` int(255) DEFAULT '0' COMMENT '浏览量',
  `collection` int(255) DEFAULT '0' COMMENT '收藏',
  `Leavingmessage` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0' COMMENT '留言',
  `yudao` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0' COMMENT '遇到',
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '谁发布的题目',
  `status` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '审核中' COMMENT '状态',
  `issee` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '是否被浏览过',
  `iscollection` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '是否被收藏',
  `iscollectionusername` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '收藏用户',
  `img` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '大概率是用户头像',
  `describe` varchar(255) COLLATE utf8_unicode_ci DEFAULT '题目提示',
  `analysis` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文字解析',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of datalist
-- ----------------------------
INSERT INTO `datalist` VALUES ('1', '简答题', '数据结构', '插入冒泡简单选择归并排序稳定', '中等', '2001-2-1', '6', '38', '34', '38', '123456', '审核中', 'true', 'true', '123456', 'qq.jpg', '这是c语言的数据结构', '这是解析');
INSERT INTO `datalist` VALUES ('32', '数学', '数学', '偶函数是y轴对称，奇函数是原点对称', '简单', '2022-1-2', '6', '0', '0', '0', '0', '已审核', 'true', 'true', '123456', 'qq.jpg', 'asda', '这是解析');
INSERT INTO `datalist` VALUES ('33', '简答', 'css', '请输入题目内容', '简单', '2022-10-15 ', '1', '0', '0', '0', '0', '已审核', 'true', 'true', '123456', 'qq.jpg', 'asdad', '这是解析');
INSERT INTO `datalist` VALUES ('34', '简答', 'css', '请输入题目内容', '简单', '2022-10-13', '1', '0', '0', '0', '0', '已审核', 'true', 'true', '123456', 'qq.jpg', 'asdad', '这是解析');
INSERT INTO `datalist` VALUES ('35', '单选', 'css', 'sadasdsadsad', '中等', '2022-10-15 ', '4545', '0', '0', '7', '0', '已审核', 'true', 'true', '123456', 'qq.jpg', 'asads', '这是解析');
INSERT INTO `datalist` VALUES ('36', '单选', 'css', 'sadasdsadsad', '中等', '2022-10-15 ', '4545', '0', '0', '7', '0', '已审核', 'true', 'true', '123456', 'qq.jpg', 'asdad', '这是解析');
INSERT INTO `datalist` VALUES ('37', '单选', 'css', 'dasd', '中等', '2022-10-15 ', '1', '0', '0', '0', '0', '已审核', 'true', 'true', '123456', 'qq.jpg', 'asd', '这是解析');
INSERT INTO `datalist` VALUES ('38', '单选', 'css', 'sadsad', '中等', '2022-10-15 ', '0', '0', '0', '0', '0', '已审核', null, 'true', '123456', 'qq.jpg', null, '这是解析');
INSERT INTO `datalist` VALUES ('39', '单选', 'css', 'sadsad', '中等', '2022-10-15 ', '0', '0', '0', '0', '123456', '                           ', null, 'true', '123456', 'qq.jpg', 'asds', '这是解析');
INSERT INTO `datalist` VALUES ('40', '单选', 'css', 'sadsad', '中等', '2022-10-15 ', '0', '0', '0', '0', '123456', '审核中', null, 'true', '123456', 'qq.jpg', null, '这是解析');
INSERT INTO `datalist` VALUES ('41', '单选', 'css', 'dasd', '中等', '2022-11-03 ', '1', '0', '0', '0', '123456', '审核中', 'true', 'true', '123456', 'qq.jpg', 'asd', '这是解析');
INSERT INTO `datalist` VALUES ('42', '单选', '数据结构', '指针是啥', '中等', '2022-11-06 ', '0', '0', '0', '0', '123456', '审核中', null, 'true', '123456', null, null, '这是解析');
INSERT INTO `datalist` VALUES ('43', '单选', '数据结构', 'asd', '中等', '2022-11-06 ', '0', '0', '0', '0', '123456', '审核中', null, 'true', '123456', null, 'asdasd', '这是解析');
INSERT INTO `datalist` VALUES ('44', '单选', '数据结构', 'asd', '中等', '2022-11-06 ', '0', '0', '0', '0', '123456', '审核中', null, 'true', '123456', 'qq.jpg', null, '这是解析');
INSERT INTO `datalist` VALUES ('45', '单选', '数据结构', '测试测试', '中等', '2022-11-13 ', '1', '0', '0', '0', '123456', '审核中', 'true', null, null, 'qq.jpg', null, '这是解析');

-- ----------------------------
-- Table structure for father
-- ----------------------------
DROP TABLE IF EXISTS `father`;
CREATE TABLE `father` (
  `id` int(11) NOT NULL,
  `father_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `relplylist` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of father
-- ----------------------------
INSERT INTO `father` VALUES ('1', 'java', 'us', 'asd', 'sd', '2022-10-05 15:44:47', 'ad', '2');
INSERT INTO `father` VALUES ('2', 'dasd', 'asdsad', 'adasd', 'asdsa', '2022-09-07 15:45:01', 'sdad', null);
INSERT INTO `father` VALUES ('3', 'sadsa', 'asdasd', 'asd', 'sadasd', '2022-09-14 15:45:37', 'asdas', null);

-- ----------------------------
-- Table structure for officalpaper
-- ----------------------------
DROP TABLE IF EXISTS `officalpaper`;
CREATE TABLE `officalpaper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  ` img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_tag_one` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `looknum` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of officalpaper
-- ----------------------------
INSERT INTO `officalpaper` VALUES ('1', '百度2018校园招聘-机器学习', 'baidu.1297735d.png', '2022-2-3', '前端', '0');
INSERT INTO `officalpaper` VALUES ('2', 'SADSAD', 'ASDASD', 'SADSA', 'SADSAD', '0');
INSERT INTO `officalpaper` VALUES ('3', 'sdxs', 'sad', 'asd', 'asd', '0');
INSERT INTO `officalpaper` VALUES ('4', 'asd', 'asd', 'sad', 'd', '0');
INSERT INTO `officalpaper` VALUES ('5', 'sad', 'asd', 'wq', 'we', '0');
INSERT INTO `officalpaper` VALUES ('6', 'qwe', 'wf', '87', '432', '0');

-- ----------------------------
-- Table structure for paper
-- ----------------------------
DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img_ico` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_data` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_tag_one` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  ` useroroffical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `looknum` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of paper
-- ----------------------------
INSERT INTO `paper` VALUES ('1', '题目', 'baidu.png', '2022-2-3', '数学', '官方', '10');
INSERT INTO `paper` VALUES ('2', '智联照片', 'baidu.png', '2011-2-3', '数学', '官方', '4');
INSERT INTO `paper` VALUES ('3', '丘一大傻瓜', 'baidu.png', '2011-2-4', '政治', '官方', '5');
INSERT INTO `paper` VALUES ('4', ' 大傻瓜', 'baidu.png', '2011-2-6', ' 英语', '官方', '54');
INSERT INTO `paper` VALUES ('5', '大傻瓜', 'baidu.png', '2011-2-8', ' 英语', '官方', '78');
INSERT INTO `paper` VALUES ('6', '大傻瓜', 'baidu.png', '2011-2-9', ' 英语', '用户', '0');

-- ----------------------------
-- Table structure for reply_table
-- ----------------------------
DROP TABLE IF EXISTS `reply_table`;
CREATE TABLE `reply_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reply_id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `head_portrait` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `reply_time` datetime NOT NULL,
  `reply_content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `child_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of reply_table
-- ----------------------------
INSERT INTO `reply_table` VALUES ('1', '1', 'abs', 'qq.jpg', '2022-09-14 00:05:05', '这是回复的内容1', 'sadasd');
INSERT INTO `reply_table` VALUES ('2', '2', '231', 'qq.jpg', '2022-09-28 00:09:01', '这是回复的内容2', '');
INSERT INTO `reply_table` VALUES ('3', '2', 'sad', 'qq.jpg', '2022-09-16 09:30:24', '这是回复的内容3', '');
INSERT INTO `reply_table` VALUES ('4', '1', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('5', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('6', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('7', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('8', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('9', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('10', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('11', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', '123456', '1234');
INSERT INTO `reply_table` VALUES ('12', '13', '123456', 'qq.jpg', '2022-11-05 00:00:00', 'sadsad', '1234');
INSERT INTO `reply_table` VALUES ('13', '13', '123456', 'qq.jpg', '2022-11-26 00:00:00', 'sadasdsad', '偶函数是y轴对称，奇函数是原点对称');

-- ----------------------------
-- Table structure for repy
-- ----------------------------
DROP TABLE IF EXISTS `repy`;
CREATE TABLE `repy` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `toux` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `textvalues` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `maintitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of repy
-- ----------------------------
INSERT INTO `repy` VALUES ('1', '123456', 'sdfg', '2022-08-25 ', 'asdsad', '123456');
INSERT INTO `repy` VALUES ('2', '123456', 'adas', 'ddsad', 'adssad', 'asdasf');

-- ----------------------------
-- Table structure for subject_paper
-- ----------------------------
DROP TABLE IF EXISTS `subject_paper`;
CREATE TABLE `subject_paper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `checked1` tinyint(1) DEFAULT NULL,
  `checked2` tinyint(1) DEFAULT NULL,
  `checked3` tinyint(1) DEFAULT NULL,
  `checked4` tinyint(1) DEFAULT NULL,
  `error` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer1error` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer2error` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer3error` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `answer4error` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paper_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of subject_paper
-- ----------------------------
INSERT INTO `subject_paper` VALUES ('1', '题目', '第一个回答', '第二个回答', '第三个回答', '第四个回答', '0', '0', '0', '0', 'true', '第一个回答', '', null, null, '题目');
INSERT INTO `subject_paper` VALUES ('2', 'asdsad', 'asda', 'adad', '第三个回答', '第三个回答', '0', '0', '0', '0', null, null, null, null, null, '题目');
INSERT INTO `subject_paper` VALUES ('3', 'sads', 'asd', 'adad', '第三个回答', '第三个回答', '0', '0', '0', '0', null, null, null, null, null, '题目');
INSERT INTO `subject_paper` VALUES ('4', 'asdasd', 'adad', 'adad', 'asdasd', '第三个回答', '0', '0', '0', '0', null, null, null, null, null, '题目');
INSERT INTO `subject_paper` VALUES ('5', 'asdas', 'asd', 'ada', '第三个回答', '第三个回答', '0', '0', '0', '0', null, null, null, null, null, '题目');
INSERT INTO `subject_paper` VALUES ('6', 'asdsa', 'asdasd', 'asd', 'asds', '第三个回答', '0', '0', '0', '0', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for userpaper
-- ----------------------------
DROP TABLE IF EXISTS `userpaper`;
CREATE TABLE `userpaper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `paper_tag_one` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `looknum` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of userpaper
-- ----------------------------
INSERT INTO `userpaper` VALUES ('1', 'asdas', 'sad', 'sadsad', 'sadsad', '0');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(255) DEFAULT '0',
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sex` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `introduction` varchar(255) COLLATE utf8_unicode_ci DEFAULT '请修改',
  `interest` varchar(255) COLLATE utf8_unicode_ci DEFAULT '请修改',
  `state` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT '请修改',
  `Registration_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT '请修改',
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cookie` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'o',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '0', '123456', '男', '最大的大傻瓜', '喜欢蔡徐坤', '喜欢', 'dsada', '2022-11-30', 'qq.jpg', '撒大苏打', 'e10adc3949ba59abbe56e057f20f883e', '123456', '1234');
INSERT INTO `users` VALUES ('2', '2', '123456', '123456', '123456', '123456', '123456', '123456', '2100-01-05', 'qq.jpg', '啥', 'asdasd', 'asdsa', 'o');
INSERT INTO `users` VALUES ('3', '1', '123456', '123456', '123456', '123456', '123456', '123456', '2100-01-05', 'qq.jpg', '啥', 'asdas', 'ad', 'o');

-- ----------------------------
-- Table structure for user_copy
-- ----------------------------
DROP TABLE IF EXISTS `user_copy`;
CREATE TABLE `user_copy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sex` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `introduction` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `interest` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Registration_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cookie` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'o',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_copy
-- ----------------------------
INSERT INTO `user_copy` VALUES ('1', '23', '123456', '男', '最大的大傻瓜', '喜欢蔡徐坤', '喜欢', 'dsada', 'asdas', 'qq.jpg', '撒大苏打', '123456', '123456', '1234');
INSERT INTO `user_copy` VALUES ('2', '2', 'asd', 'asd', 'asd', 'asd', 'ads', 'asd', 'asd', 'qq.jpg', '撒大苏打', 'asdasd', 'asdsa', 'o');
INSERT INTO `user_copy` VALUES ('3', '1', 'asdsa', 'asd', 'asdasd', 'asd', 'asd', 'asd', 'sad', 'qq.jpg', '撒大苏打', 'asdas', 'ad', 'o');

-- ----------------------------
-- View structure for datalistuser
-- ----------------------------
DROP VIEW IF EXISTS `datalistuser`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `datalistuser` AS select `datalist`.`id` AS `id`,`datalist`.`subjecttype` AS `subjecttype`,`datalist`.`tag` AS `tag`,`datalist`.`title` AS `title`,`datalist`.`difflcult` AS `difflcult`,`datalist`.`time` AS `time`,`datalist`.`views` AS `views`,`datalist`.`collection` AS `collection`,`datalist`.`Leavingmessage` AS `Leavingmessage`,`datalist`.`yudao` AS `yudao`,`datalist`.`username` AS `username`,`datalist`.`status` AS `status`,`datalist`.`issee` AS `issee`,`datalist`.`iscollection` AS `iscollection`,`datalist`.`iscollectionusername` AS `iscollectionusername`,`user`.`img` AS `img` from (`datalist` join `user`) ;

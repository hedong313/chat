#download page
 WAMP


CREATE TABLE `user` (
  `user_id` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(100) character set latin1 NOT NULL default '' COMMENT '用户名',
  `password` char(32) character set latin1 NOT NULL default '' COMMENT '密码',
  `add_time` datetime NOT NULL default '0000-00-00 00:00:00',
  `update_time` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `delete_flag` tinyint(3) unsigned NOT NULL default '0',
  PRIMARY KEY  (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8






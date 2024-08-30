CREATE DATABASE IF NOT EXISTS db_monagenda;

USE db_monagenda;

CREATE TABLE t_schedule (
    idSchedule VARCHAR(255) NOT NULL PRIMARY KEY,
    schLink VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE t_teacher (
  idTeacher varchar(100) NOT NULL PRIMARY KEY,
  teaLink varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
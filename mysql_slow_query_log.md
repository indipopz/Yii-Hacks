<h4>Set Global Slow Query Log In MariaDb Server.</h4>

```
SET GLOBAL slow_query_log=1;
SET GLOBAL long_query_time=0.001;

SELECT @@slow_query_log; 
SELECT @@slow_query_log_file;
SELECT @@datadir;


SELECT variable_value FROM information_schema.global_variables WHERE variable_name 
IN ('slow_query_log','slow_query_log_file','long_query_time');

```

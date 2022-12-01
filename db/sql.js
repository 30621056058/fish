const mysql = require('mysql')
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'ms' //数据库名称
})

exports.query = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            connection.query(sql, params, (err, result) => {
                //释放连接
                // pool.releaseConnection(connection)
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
   //这么设置，能够解决卡死问题
            connection.release();
        });
    });
   };

module.exports = connection

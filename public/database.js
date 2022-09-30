const { ipcMain } = require("electron");
const config = require('../src/config.json')
const newMysql = require('../public/mysql')

ipcMain.handle("query", 
  (event, sql) => new Promise((resolve, reject) => {
      const mysql = newMysql(config.falso);
      console.log(sql);
      mysql.connect();
      
      mysql.query({
          sql: sql,
          timeout: 40000, // 40s
          
        }, (error, results) => {
            if (error) console.error(error);
            // console.log(results);
            resolve(results);
            mysql.end();
        });
    })
)
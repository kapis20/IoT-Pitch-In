/*
Author: Robert Lie (mobilefish.com)
The config.js file contains the MySQL user credentials and The Things Network (TTN) appID and accessKey.
See LoRa/LoRaWAN Tutorial 27
https://www.mobilefish.com/download/lora/lora_part27.pdf

The config.js file is used by:
- drop_db.js
- create_db.js
- create_table.js
- store_records.js
- read_table.js
- retrieve.js
- send.js
*/

require ('mqtt') // retriving modules existing in seperate files
const databaseOptions = {
    host: 'localhost',
    user: 'ENTER_MYSQL_ACCOUNT_NAME_HERE',
    password: 'ENTER_MYSQL_PASSWORD_HERE'
};

const TTNOptions = {
    appID: '0004a30b001c2043@ttn',
    accessKey: 'NNSXS.WLWN5EQ4CCID3ZVAXJKWCOBLCFTOJACJHD7OVUY.A2QKRNRHC5UZJOUJ5BZKMDOSVKT3JZ6KF4RSALJEZKXBGA7A6HLA'
};

module.exports = {databaseOptions: databaseOptions, TTNOptions: TTNOptions};

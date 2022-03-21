import type { IncomingMessage, ServerResponse } from 'http'
import mysql from 'mysql2/promise';

export default async (req: IncomingMessage, res: ServerResponse) => {
    // req['db'] = await mysql.createConnection({
    //     host: 'eu-cdbr-west-02.cleardb.net',
    //     user: 'b3397b7a52f995',
    //     password: 'd1a9b5d9',
    //     database: 'heroku_153ce67a6861706
    //     ',
    // })

}
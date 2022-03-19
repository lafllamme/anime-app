import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const [rows, fields] = await req['db'].execute("SELECT * FROM users ORDER BY id DESC")

    return {
        status: res.statusCode,
        columns: fields.map((i: any) => i.name),
        entries: rows,
        message: res.statusMessage

    }
}
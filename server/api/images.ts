import type { IncomingMessage, ServerResponse } from 'http'
import * as url from 'url'

export default async (req: IncomingMessage, res: ServerResponse) => {

    let data = { data: [{ data: "" }] }


    //searches for random anime pictures
    data = await $fetch("https://pic.re/image", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        }
    })


    res.writeHead(200, {
        "content-type": "application/json",
    })

    res.write(JSON.stringify(data))
    res.end()
}


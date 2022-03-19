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

    console.log(data.file_url)

    res.write(JSON.stringify(data))
    res.end()
}


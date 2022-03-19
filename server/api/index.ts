import type { IncomingMessage, ServerResponse } from 'http'
import * as url from 'url'

export default async (req: IncomingMessage, res: ServerResponse) => {


    const queryObject = url.parse(req.url as string, true).query
    const path = url.parse(req.url as string, true).pathname


    const { search } = queryObject
    const searchType = path ? path.replace('/', '') : ''

    let data = { data: [{ data: "" }] }


    const types = ['anime', 'manga', 'person', 'character'];


    //searches for categories by given keyword


    if (search && types.includes(searchType)) {
        data = await $fetch(`https://jikan1.p.rapidapi.com/search/${searchType}?q=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "fe620fc4e4mshd3600475fe2d757p1e1b9ajsn24b78e163bdc"
            }
        })
    }

    else {
        data = await $fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "fe620fc4e4mshd3600475fe2d757p1e1b9ajsn24b78e163bdc"
            }
        })

    }




    res.writeHead(200, {
        "content-type": "application/json",
    })
    res.write(JSON.stringify(data))
    res.end()
}
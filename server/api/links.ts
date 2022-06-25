import type { IncomingMessage, ServerResponse } from 'http'
import url from 'url'

export default async (req: IncomingMessage, res: ServerResponse) => {

    const queryObject = url.parse(req.url as string, true).query
    const path = url.parse(req.url as string, true).pathname

    const { search } = queryObject

    console.log(search, queryObject, path);

    /* This is an object representing an Anime show. 
    The API allows you to retrieve individual Anime as well as a list of them using various filters.
     */

    let title = ''
    let anilist_id = ''
    let mal_id = ''
    let formats = ''
    let status = ''
    let year = ''
    let season = ''
    let genres = []


    /* 
    "TV": 0,
    "TV_SHORT": 1,
    "MOVIE": 2,
    "SPECIAL": 3,
    "OVA": 4,
    "ONA": 5,
    "MUSIC": 6 
    formats */

    let data = { data: [{ data: "" }] }

    // data = await $fetch('https://api.aniapi.com/v1/episode?anime_id=21&number=234&is_dub=false&locale=en', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0NDYiLCJuYmYiOjE2NDc4MDYzNTQsImV4cCI6MTY1MDM5ODM1NCwiaWF0IjoxNjQ3ODA2MzU0fQ.mnQV7hlJKpLiZ2mk3AYCEitqearmQKea8d-Sib3YWlA',
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     }
    // })



    data = await $fetch('https://bs.to/ajax/embed.php', {
        credentials: "same-origin",
        method: 'POST',
        headers: {
            'authority': 'bs.to',
            'content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
            'path': '/ajax/embed.php',
            'scheme': 'https',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'cookie': '__ddg1_=jHWBrxqImt8zV3nLF1LU; seriesorder=genre; __bsduid=cr8tpfqs1r4ul4a632d94f8e7u; __seen=1648939246356',
            'origin': 'https://bs.to'


                }
        // headers: {
        //     'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
        //     'X-RapidAPI-Key': 'aa58093f4fmshc6406cb77f2635fp162cedjsn798c8dc14a31'
        // }

    })



    res.writeHead(200, {
        "content-type": "application/json",
    })

    res.write(JSON.stringify(data))
    res.end()





}


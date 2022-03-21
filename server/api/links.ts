import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {


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

    data = await $fetch('https://api.aniapi.com/v1/anime?title=One%20Piece&formats=0,1&status=1&year=1999&season=3&genres=Pirates,War,Cyborg&nsfw=true&with_episodes=false', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0NDYiLCJuYmYiOjE2NDc4MDYzNTQsImV4cCI6MTY1MDM5ODM1NCwiaWF0IjoxNjQ3ODA2MzU0fQ.mnQV7hlJKpLiZ2mk3AYCEitqearmQKea8d-Sib3YWlA',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })



    res.writeHead(200, {
        "content-type": "application/json",
    })

    res.write(JSON.stringify(data))
    res.end()





}


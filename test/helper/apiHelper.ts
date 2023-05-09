import report from "supertest"

import request from "supertest"
import reporter from "../helper/reporter"

let payload = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}

async function GET(testid:string, baseUrl: string, endpoint: string, authToken:string,queryParams: Object,) {
    if(!baseUrl || !endpoint){
        throw Error(`One of the given values baseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid `)
    }
    baseUrl = baseUrl.trim()
    endpoint = endpoint.trim()  
    reporter.addStep(testid, "info", `making a GET to ${endpoint}`)
    try {
        return await request(baseUrl)
        .get(endpoint)
        .query(queryParams)
        .auth(authToken, {type: 'bearer'})
        .set("Content-Type","application/json")
        .set("Accept", "application/json")
    } catch (err) {
        err.message = `error making a Get call to ${endpoint}, ${err}`
    }
}


async function POST(testid:string, baseUrl: string, endpoint: string, authToken:string,payload: Object,) {
    if(!baseUrl || !endpoint){
        throw new Error(`One of the given values baseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid `)
    }
    baseUrl = baseUrl.trim()
    endpoint = endpoint.trim()  
    reporter.addStep(testid, "info", `making a POST to ${endpoint}`)
    try {
       let res = await request(baseUrl)
        .post(endpoint)
        
        .auth(authToken, {type: 'bearer'})
        .set("Content-Type","application/json")
        .set("Accept", "application/json")
        .send(payload)
        console.log(`-----------Res: ${JSON.stringify(res.body)}`)
    } catch (err) {
        err.message = `error making a POST call to ${endpoint}, ${err}`
    }
}

export default {GET, POST}


/* 
    https://reqres.in
    /api/users?page=2
*/
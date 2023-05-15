import report from "supertest";
import fs from "fs";
import request from "supertest";
import reporter from "../helper/reporter";

let payload = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

async function GET(
  testid: string,
  baseUrl: string,
  endpoint: string,
  authToken: string
) {
  if (!baseUrl) {
    throw Error(
      `One of the given values baseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid `
    );
  }
  baseUrl = baseUrl.trim();
  // endpoint = endpoint.trim()
  reporter.addStep(testid, "info", `making a GET to ${endpoint}`);
  try {
    return await request(baseUrl)
      .get(endpoint)
      // .query(queryParams)
      .auth(authToken, { type: "bearer" })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
  } catch (err) {
    err.message = `error making a Get call to ${endpoint}, ${err}`;
  }
}

async function POST(
  testid: string,
  baseUrl: string,
  endpoint: string,
  authToken: string,
  data: object
) {
  if (!baseUrl) {
    throw new Error(
      `One of the given values baseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid `
    );
  }
  baseUrl = baseUrl.trim();
  // endpoint = endpoint.trim()
  reporter.addStep(testid, "info", `making a POST to ${endpoint}`);
  try {
    let res = await request(baseUrl)
      .post(endpoint)
      .set("accept", "application/json")
      .auth(authToken, { type: "bearer" })
    //   .set("Authorization",`${authToken}`)
      .set("Content-Type", "application/json")
      .send(data);
     console.log(`----5-123---`)
        //   .set("authorization", authen)
    console.log(`-----------Res: ${JSON.stringify(res.body)}`);
    return JSON.stringify(res.body);

    console.log(`----6-1234---`);
  } catch (err) {
    err.message = `error making a POST call to ${endpoint}, ${err}`;
  }
}

async function DELETE(
  testid: string,
  baseUrl: string,
  endpoint: string,
  data: object
) {
  if (!baseUrl) {
    throw new Error(
      `One of the given values baseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid `
    );
  }
  baseUrl = baseUrl.trim();
  // endpoint = endpoint.trim()
  reporter.addStep(testid, "info", `making a POST to ${endpoint}`);
  try {
    let res = await request(baseUrl)
      .post(endpoint)
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .send(data);
    // console.log(`----5-123---`)
    console.log(`-----------Res: ${JSON.stringify(res.body)}`);
    return JSON.stringify(res.body);

    console.log(`----6-1234---`);
  } catch (err) {
    err.message = `error making a POST call to ${endpoint}, ${err}`;
  }
}

export default { GET, POST, DELETE };

/* 
    https://reqres.in
    /api/users?page=2
*/

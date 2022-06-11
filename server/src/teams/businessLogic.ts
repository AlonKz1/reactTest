import { getConnection } from "../../db";
import { getTeamsQuery } from "./query";

async function getTeamsFromDB() {
    const query = getTeamsQuery
    console.log(query)

    const [result] = await getConnection().execute(query)
    console.log(result)
    return result
}

export { getTeamsFromDB }


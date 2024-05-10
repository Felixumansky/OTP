import { config } from "./connect.db.js";
import sql from "mssql";

/**
 * returns data from table
 */
export async function sqlQuery(query) {
	const q = "UPDATE Users SET email = 'Y@Y'";
	sql.connect(config, async (err) => {
		if (err) {
			console.error("Error connecting to the database:", err);
		} else {
			console.log("Connected to the database!");
		}
		const result = await sql.query(q);
		console.log(result.recordset);
	});
}

import sql from "mssql";
import { getDBConfig } from "../config/db_config.js";
const { name, pwd, server, user } = getDBConfig();

// Configure database connection
export const config = {
	user: user,
	password: pwd,
	server: server,
	database: name,
	options: {
		trustServerCertificate: true,
	},
};

/**
 * returns data from table
 */
export async function sqlQueryExecute(query) {
	console.log("Sql query: ", query);
	return new Promise((resolve, reject) => {
		sql.connect(config, async (err) => {
			if (err) {
				console.error("Error connecting to the database:", err);
			} else {
				console.log("Connected to the database!");
			}
			const result = await sql.query(query);
			console.log(
				"sqlQueryExecute result recordset ",
				result.recordsets.length > 0 ? result.recordset[0] : 0
			);
			return resolve(result.recordsets.length > 0 ? result.recordset[0] : 0);
		});
	});
}

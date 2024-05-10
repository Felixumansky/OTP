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

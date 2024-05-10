export const dbConfig = {
	user: process.env.DB_USER ? process.env.DB_USER : "",
	pwd: process.env.DB_PWD ? process.env.DB_PWD : "",
	server: process.env.DB_SERVER ? process.env.DB_SERVER : "",
	name: process.env.DB_NAME ? process.env.DB_NAME : "",
};

export function getDBConfig() {
	return dbConfig;
}

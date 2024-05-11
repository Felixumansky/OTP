export function insertUserQuery(email) {
	return `INSERT INTO [dbo].[Users]
    (email) VALUES ('${email}')`;
}

export function insertUserOtpQuery(userId, otp) {
	return `INSERT INTO [dbo].[Otps]
    (userId,otp) VALUES (${userId},'${otp}')`;
}

export function getUserQuery(email) {
	return `SELECT id FROM Users WHERE  email = '${email}'`;
}

export function getUserOtpDetailsQuery(userId) {
	return `SELECT otp,createDate FROM Otps WHERE  userId = ${userId}`;
}

export function updateUserOtpQuery(userId, otp, createDate) {
	return `Update Otps SET createDate='${createDate}' , otp = '${otp}' where userId=${userId}`;
}

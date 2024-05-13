import bcrypt from 'bcrypt';
export const hashPassword = async (value) => {
    const hashedPassword = await bcrypt.hash(value, 16);
    return hashedPassword;
};
//# sourceMappingURL=hashPassword.js.map
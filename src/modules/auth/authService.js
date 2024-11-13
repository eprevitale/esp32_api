import User from '../user/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../../../config.js';

const { JsonWebTokenError } = jwt;

const SECRET = env.SECRET;

const authService = {}


authService.login = async (email, password) => {
    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            throw new JsonWebTokenError("Senha inválida!");
        }

        const token = jwt.sign({ id: user._id }, SECRET);

        return token;

    } catch (err) {

        if (err instanceof JsonWebTokenError) {
            throw new JsonWebTokenError(err.message);
        }

        throw new Error(err.message);
    }
}


export default authService;
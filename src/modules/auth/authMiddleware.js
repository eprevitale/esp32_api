import env from "../../../config.js";
import jwt from "jsonwebtoken";

const SECRET = env.SECRET;

const authMiddleware = {};

authMiddleware.isUserAuthenticated = async (req, res, next) => {

    const authHeader = req.headers["authorization"]; // Bearer <token>
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Usuário não autenticado!" });
    }

    try {

        jwt.verify(token, SECRET);

        next();
        
    } catch (err) {
        return res.status(401).json({ error: "Token inválido!" });
    }

}


export default authMiddleware;
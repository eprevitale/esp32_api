import authService from "./authService.js";

const authController = {};


authController.post = async (req, res) => {

    const { email, password } = req.body;

    if (!email) {
        return res.status(422).json({ error: "The e-mail is required!" });
    }
    if (!password) {
        return res.status(422).json({ error: "The password is required!" });
    }

    try {
        
        const token = await authService.login(email, password);

        return res.status(200).json({ msg: "Usuário autenticado com sucesso", token: token });

    } catch (err) {
        return res.status(500).json({ error: `${err}` });
    }

}


export default authController;
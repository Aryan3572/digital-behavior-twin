import { registerUser, loginUser } from "../services/auth.service.js";

export const register = async function(req, res) {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({
            message: "user registered successfully",
            user,
        });
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
};

export const login = async function(req, res) {
    try {
        const result = await loginUser(req.body);
        res.json(result);

    }
    catch(error){
        res.status(401).json({error: error.message});
    }
};
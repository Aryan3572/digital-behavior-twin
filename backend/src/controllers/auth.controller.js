import authservice from '../services/auth.service.js';
const register = async function(req, res) {
    try {
        const user = await authservice.registerUser(req.body);
        res.status(201).json({
            message : 'User registered successfully',
            user,
        });
    }
    catch (error)
    {
        res.status(400).json({
            error: error.message,
        });
    }
};

const Login = async function(req, res) {
    try {
        const result = await authService.LoginUser(req.body);
        res.json(result);

    }
    catch (error)
    {
        res.status(401).json({
            error: error.message,
        });
    }
};
export default { register, Login };
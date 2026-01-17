import jwt from 'jsonwebtoken';

export const generateToken = function(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, 
        {expiresIn: "7d",
            
        }
    )
}
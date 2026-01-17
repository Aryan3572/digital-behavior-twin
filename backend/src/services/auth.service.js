import bcrypt from 'bcrypt';
import prisma from '../config/db.js'
import { generateToken } from '../utils/jwt.js';

export const registerUser = async function({name , email, password}) {
    const existingUser = await prisma.user.findUnique({
        where: {email},
    });

    if(existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return user;
};

export const loginUser = async function({ email, password}) {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if(!user) {
        throw new Error("Invalid email or password");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error("Invalid email or password");
    }

    const token = generateToken({id: user.id});

    return {token, user};
};
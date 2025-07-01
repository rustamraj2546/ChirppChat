import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie('token', token, {
        httpOnly: true, // prevents XSS cross-site scripting attacks
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== 'development' // only send the cookie over HTTPS in production
    });
};

export default generateTokenAndSetCookie;
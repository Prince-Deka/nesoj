const adminMiddleware = (req, res, next) => {
    try {
        const isAdmin = req.user.isAdmin;
        if(!isAdmin) {
            return res.status(403).json({message: 'Unauthorized access. You are not an admin!'});
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;
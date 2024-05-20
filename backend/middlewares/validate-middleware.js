const validate = (schema) => async (req, res, next) => {
    try {
        // Ensure multer has populated req.body with form fields
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the details aaaaal properly";
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails
        };
        next(error);
    }
};

module.exports = validate;

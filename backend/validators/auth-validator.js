const { z } = require("zod");

const loginSchema = z.object({
    username: z.string({ required_error: "Username is required" }).trim().min(3, { message: "Username must be at least 3 characters long" }),
    password: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters long" })
});

const signupSchema = z.object({
    username: z.string({ required_error: "Username is required" }).trim().min(3, { message: "Username must be at least 3 characters long" }),
    password: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters long" }),
    email: z.string({ required_error: "Email is required" }).trim(),
    firstName: z.string({ required_error: "First name is required" }).trim().min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z.string({ required_error: "Last name is required" }).trim().min(2, { message: "Last name must be at least 2 characters long" }),
    gender: z.string({ required_error: "Gender is required" }),
    phone: z.string({ required_error: "Phone number is required" }).trim().min(10, { message: "Phone number must be at least 10 characters long" }),
    residence: z.string({ required_error: "Residence is required" }),
    dateOfBirth: z.string({ required_error: "Date of birth is required" }),
    idType: z.string({ required_error: "ID type is required" }).min(3, { message: "Please select the ID type" }),
    idNumber: z.string({ required_error: "ID number is required" }).trim().min(10, { message: "ID number must be at least 10 characters long" }),
    address: z.string({ required_error: "Address is required" }).trim().min(10, { message: "Address must be at least 10 characters long" }),
    cityTown: z.string({ required_error: "City/Town is required" }).trim().min(3, { message: "City/Town must be at least 3 characters long" }),
    stateName: z.string({ required_error: "State name is required" }).min(3, { message: "Please select your state" }),
    district: z.string({ required_error: "District is required" }).trim().min(3, { message: "District must be at least 3 characters long" }),
    pincode: z.string({ required_error: "Pincode is required" }).trim().min(6, { message: "Pincode must be at least 6 characters long" }),
    motherName: z.string({ required_error: "Mother's name is required" }).trim().min(2, { message: "Mother's name must be at least 2 characters long" }),
    fatherName: z.string({ required_error: "Father's name is required" }).trim().min(2, { message: "Father's name must be at least 2 characters long" }),
    noSiblings: z.string({ required_error: "Number of siblings is required" }),
    uniName: z.string({ required_error: "University name is required" }).trim(),
    regNo: z.string({ required_error: "Registration number is required" }).trim().min(8, { message: "Registration number must be at least 8 characters long" }),
    course: z.string({ required_error: "Course is required" }).min(3, { message: "Please select your course" }),
    specialization: z.string({ required_error: "Specialization is required" }).trim().min(2, { message: "Specialization must be at least 2 characters long" }),
    gradYear: z.string({ required_error: "Graduation year is required" }),
    profilePicUrl: z.any(),  // Multer handles files, Zod checks their existence
    idFileUrl: z.any()  // Multer handles files, Zod checks their existence
});

module.exports = { signupSchema, loginSchema };

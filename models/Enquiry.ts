import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        company: String,
        domain: String,
        candidates: Number,
        mode: String,
        location: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Enquiry ||
    mongoose.model("Enquiry", EnquirySchema);
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();

        await Enquiry.create(body);

        return NextResponse.json(
            { success: true },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}
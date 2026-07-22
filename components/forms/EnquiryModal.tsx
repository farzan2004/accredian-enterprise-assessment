"use client";
import Button from "@/components/ui/Button";
import { X, ChevronDown } from "lucide-react";

import { useForm } from "react-hook-form";

interface EnquiryModalProps {
    open: boolean;
    onClose: () => void;
}

export default function EnquiryModal({
    open,
    onClose,
}: EnquiryModalProps) {
    if (!open) return null;
    const onSubmit = (data: any) => {
        console.log(data);
        onClose();
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="relative flex w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Image */}
                <div className="hidden w-[48%] lg:block">
                    <img
                        src="/business-v2.webp"
                        alt="Enquiry"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Form */}
                <div className="w-full p-8 lg:w-[52%]">

                    <button
                        onClick={onClose}
                        className="absolute right-5 top-5 rounded-full p-1 text-gray-500 transition hover:bg-gray-100"
                    >
                        <X size={26} />
                    </button>

                    <h2 className="mb-8 text-2xl font-bold">
                        Enquire Now
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#287ae3]"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name.message as string}
                            </p>
                        )}

                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#287ae3]"
                            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message as string}
                            </p>
                        )}
                        <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                            <select
                                className="bg-transparent text-gray-700 outline-none"
                                defaultValue="+91"
                            >
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+61">🇦🇺 +61</option>
                                <option value="+65">🇸🇬 +65</option>
                                <option value="+971">🇦🇪 +971</option>
                                <option value="+49">🇩🇪 +49</option>
                                <option value="+81">🇯🇵 +81</option>
                                <option value="+33">🇫🇷 +33</option>
                                <option value="+86">🇨🇳 +86</option>
                            </select>

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="flex-1 outline-none"
                                {...register("phone", { required: "Phone number is required" })}
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Enter company name"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#287ae3]"
                            {...register("company", { required: "Company name is required" })}
                        />
                        {errors.company && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.company.message as string}
                            </p>
                        )}

                        <div className="border-b border-gray-300">
                            <select
                                className="w-full bg-transparent py-2 text-gray-700 outline-none"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Domain
                                </option>
                                <option>Product Management</option>
                                <option>Data Science</option>
                                <option>Artificial Intelligence</option>
                                <option>Machine Learning</option>
                                <option>Cyber Security</option>
                                <option>Cloud Computing</option>
                                <option>Software Development</option>
                                <option>Business Analytics</option>
                                <option>Digital Marketing</option>
                                <option>Finance & CFO Program</option>
                            </select>
                        </div>

                        <input
                            type="number"
                            placeholder="Enter No. of candidates"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#287ae3]"
                            {...register("candidates", { required: "Number of candidates is required" })}
                        />
                        {errors.candidates && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.candidates.message as string}
                            </p>
                        )}

                        <div className="border-b border-gray-300">
                            <select
                                className="w-full bg-transparent py-2 text-gray-700 outline-none"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Mode of Delivery
                                </option>
                                <option>Online</option>
                                <option>Offline</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            placeholder="Eg: Gurgaon, Delhi, India"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#287ae3]"
                            {...register("location", { required: "Location is required" })}
                        />
                        {errors.location && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.location.message as string}
                            </p>
                        )}

                        <Button
                            type="submit"
                            className="mt-4 w-full"
                        >
                            Submit
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    );
}
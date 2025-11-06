import React, { useState } from "react";

export default function ContactForm() {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",

        message: "",
    });

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            setFormData({ fullname: "", email: "", message: "" });
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className=" max-w-5xl  mx-auto my-24 bg-white rounded-lg shadow-lg p-8 ">
            <h2 className="text-3xl font-bold text-black mb-2">Contact Me</h2>
            <p className="text-gray-600 mb-8">
                Please, fill out the form below and I'll get back to you as soon
                as possible.
            </p>

            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="fullname"
                        className="block text-black font-medium mb-2"
                    >
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        data-testid="test-contact-name"
                        placeholder="Enter your full name"
                        aria-required="true"
                        aria-describedby="error-name"
                        required
                        value={formData.fullname}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                            errors.fullname
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    />
                    {errors.fullname && (
                        <span
                            className="text-red-500 text-sm mt-1 block"
                            id="error-name"
                            data-testid="test-contact-error-name"
                            role="alert"
                        >
                            {errors.fullname}
                        </span>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-black font-medium mb-2"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        data-testid="test-contact-email"
                        placeholder="name@example.com"
                        aria-required="true"
                        aria-describedby="error-email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.email && (
                        <span
                            className="text-red-500 text-sm mt-1 block"
                            id="error-email"
                            data-testid="test-contact-error-email"
                            role="alert"
                        >
                            {errors.email}
                        </span>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-black font-medium mb-2"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        data-testid="test-contact-message"
                        placeholder="Write your message here (at least 10 characters)"
                        aria-required="true"
                        aria-describedby="error-message"
                        required
                        minLength={10}
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
                            errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    />
                    {errors.message && (
                        <span
                            className="text-red-500 text-sm mt-1 block"
                            id="error-message"
                            data-testid="test-contact-error-message"
                            role="alert"
                        >
                            {errors.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    data-testid="test-contact-submit"
                    className="ml-auto w-fit bg-blue-500 text-white font-semibold py-3 px-12  rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

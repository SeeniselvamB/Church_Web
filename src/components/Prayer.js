import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPrayingHands } from "react-icons/fa";
import "../styles/Prayer.css";

const Prayer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [showButton, setShowButton] = useState(false);

    // Show prayer button after scrolling
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    // Lock page scroll when popup opens
    useEffect(() => {

        const html = document.documentElement;
        const body = document.body;

        if (isOpen) {

            const scrollY = window.scrollY;

            body.style.position = "fixed";
            body.style.top = `-${scrollY}px`;
            body.style.left = "0";
            body.style.right = "0";
            body.style.overflow = "hidden";

            html.style.overflow = "hidden";

        } else {

            const scrollY = body.style.top;

            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.overflow = "";

            html.style.overflow = "";

            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }

    }, [isOpen]);

    // Handle form input
    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    // Handle form submit
    const handleSubmit = (e) => {

        e.preventDefault();
        setLoading(true);

        const currentTime = new Date().toLocaleString();

        // 1️⃣ Send email to church
        emailjs.send(
            "service_8offacw",
            "template_4ee2dkn",
            {
                name: form.name,
                email: form.email,
                message: form.message,
                time: currentTime
            },
            "LdCCFkCmzd_1c7MQu"
        );

        // 2️⃣ Send success confirmation to user
        emailjs.send(
            "service_8offacw",
            "template_438st7s",
            {
                name: form.name,
                email: form.email
            },
            "LdCCFkCmzd_1c7MQu"
        )

            .then(() => {

                alert("Prayer request sent successfully!");

                setForm({
                    name: "",
                    email: "",
                    message: ""
                });

                setIsOpen(false);

            })

            .catch((error) => {

                console.error("EmailJS Error:", error);
                alert("Failed to send prayer request. Please try again.");

            })

            .finally(() => setLoading(false));
    };

    return (
        <>

            {/* Floating Prayer Button */}
            <button
                className={`prayer-btn-square ${showButton ? "show" : ""}`}
                onClick={() => setIsOpen(true)}
            >
                <FaPrayingHands size={26} />
            </button>

            {/* Prayer Popup */}
            {isOpen && (

                <div className="prayer-overlay">

                    <div className="prayer-form light-theme">

                        <button
                            className="close-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            ✖
                        </button>

                        <h2>Submit Your Prayer Points</h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Write your prayer points here..."
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="send-btn"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>

                        </form>

                    </div>

                </div>

            )}

        </>
    );
};

export default Prayer;

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPrayingHands } from "react-icons/fa";
import "../styles/Prayer.css";

const Prayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({ name: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [showButton, setShowButton] = useState(false); // 👈 show icon after scroll

    // ✅ Scroll trigger for button visibility
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

    // ✅ Full scroll lock for desktop + mobile
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

        return () => {
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.overflow = "";
            html.style.overflow = "";
        };
    }, [isOpen]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const currentTime = new Date().toLocaleString();

        emailjs
            .send(
                "service_8offacw",
                "template_4ee2dkn",
                {
                    name: form.name,
                    message: form.message,
                    time: currentTime,
                },
                "LdCCFkCmzd_1c7MQu"
            )
            .then(() => {
                alert("Prayer request sent successfully!");
                setForm({ name: "", message: "" });
                setIsOpen(false);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send prayer request. Try again later.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            {/* 👇 Animate icon: only show after scroll */}
            <button
                className={`prayer-btn-square ${showButton ? "show" : ""}`}
                onClick={() => setIsOpen(true)}
            >
                <FaPrayingHands size={26} />
            </button>

            {isOpen && (
                <div className="prayer-overlay">
                    <div className="prayer-form light-theme">
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
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
                            <textarea
                                name="message"
                                placeholder="Write your prayer points here..."
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className="send-btn" disabled={loading}>
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

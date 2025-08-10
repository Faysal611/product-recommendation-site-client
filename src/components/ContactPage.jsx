import React, { useState } from "react";
import { motion } from "motion/react"

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);
    const [copiedStatus, setCopiedStatus] = useState("");

    const primary = "#10b69e";
    const accent = "#fdbe32";

    const handleSubmit = (e) => {
        e.preventDefault();

        // basic validation
        if (!email && !name && !message) {
            setStatus({ type: "error", msg: "Please fill at least your name or email and a message." });
            return;
        }

        const to = "faysalhasan950@gmail.com";
        const mailSubject = subject || "Contact from product recommendation site";
        const bodyLines = [];
        if (name) bodyLines.push(`Name: ${name}`);
        if (email) bodyLines.push(`Reply-to: ${email}`);
        bodyLines.push("\n");
        bodyLines.push(message || "(no message)");
        const body = bodyLines.join("\n");

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailURL);

        setStatus({ type: "success", msg: "Opening your mail client..." });
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6" style={{ background: `linear-gradient(135deg, ${primary}10 0%, ${accent}10 100%)` }}>
            <div className="w-full max-w-7xl bg-white/95 backdrop-blur rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl font-extrabold mb-3" style={{ color: primary }}>
                            Get in touch
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Have a question about a product or want to share a recommendation? Fill out the form and
                            send an email directly to <span className="font-medium">faysalhasan950@gmail.com</span>.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="rounded-full p-3" style={{ background: primary }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 7.99999C2 6.89999 2.9 6.00001 4 6.00001H20C21.1 6.00001 22 6.90001 22 7.99999V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V7.99999Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 8L12 13L2 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <div className="font-medium">faysalhasan950@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="rounded-full p-3" style={{ background: accent }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 7V12L16 14" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Response time</div>
                                    <div className="font-medium">Usually within 24-48 hours</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={() => {
                                    navigator.clipboard?.writeText("faysalhasan950@gmail.com");
                                    setCopiedStatus("Email copied to clipboard!")
                                    setTimeout(() => {
                                        setCopiedStatus("")
                                    }, 1500)
                                }}
                                className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg font-medium"
                                style={{ background: primary, color: "white" }}
                            >
                                Copy email
                            </button>
                            <p className="text-green-400 mt-4 text-sm">{copiedStatus}</p>
                        </div>
                    </motion.div>


                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2 bg-white rounded-xl p-6 border"
                    >
                        <label className="block mb-2 text-sm font-semibold text-gray-700">Your name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full mb-3 rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                            style={{ borderColor: `${primary}33` }}
                        />

                        <label className="block mb-2 text-sm font-semibold text-gray-700">Your email (optional)</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            type="email"
                            className="w-full mb-3 rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                            style={{ borderColor: `${primary}33` }}
                        />

                        <label className="block mb-2 text-sm font-semibold text-gray-700">Subject</label>
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Short subject"
                            className="w-full mb-3 rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                            style={{ borderColor: `${primary}33` }}
                        />

                        <label className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message here..."
                            rows={6}
                            className="w-full mb-4 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 resize-y"
                            style={{ borderColor: `${primary}33` }}
                        />

                        <div className="flex items-center justify-between gap-3">
                            <button
                                type="submit"
                                className="flex-1 rounded-lg px-4 py-2 font-semibold shadow"
                                style={{ background: primary, color: "white" }}
                            >
                                Send Email
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setName("");
                                    setEmail("");
                                    setSubject("");
                                    setMessage("");
                                    setStatus(null);
                                }}
                                className="rounded-lg px-4 py-2 font-medium border"
                                style={{ borderColor: `${accent}` }}
                            >
                                Reset
                            </button>
                        </div>

                        {status && (
                            <div
                                className={`mt-4 text-sm ${status.type === "error" ? "text-red-600" : "text-green-700"}`}
                            >
                                {status.msg}
                            </div>
                        )}

                        <p className="mt-4 text-xs text-gray-500">
                            By using this form you will open your email client to send a message directly to <span className="font-medium">faysalhasan950@gmail.com</span>.
                        </p>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}

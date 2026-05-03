import { useState, useContext } from "react";
import { Context } from "../MyContext";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); 
  const { darkmode } = useContext(Context);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending message...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "f52bbf93-d833-4702-9541-72bb434890ad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setResult("");
      }, 5000);
    }
  };

  const inputStyles = `
    w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none
    ${darkmode 
      ? "bg-slate-800/50 border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
      : "bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"}
  `;

  return (
    <div className="w-full mx-auto">
      <form 
        onSubmit={onSubmit} 
        className={`relative p-6 md:p-8 rounded-3xl border backdrop-blur-xl space-y-5
          ${darkmode 
            ? "bg-slate-900/40 border-white/10 shadow-2xl shadow-blue-900/10" 
            : "bg-white/70 border-slate-200 shadow-xl shadow-slate-200/40"}`}
      >
        <div className="space-y-1">
          <input 
            type="text" 
            placeholder="Your Name" 
            name="name" 
            required 
            className={inputStyles} 
          />
        </div>

        <div className="space-y-1">
          <input 
            type="email" 
            placeholder="Your Email" 
            name="email" 
            required 
            className={inputStyles} 
          />
        </div>

        <div className="space-y-1">
          <textarea 
            name="message" 
            placeholder="How can I help you?" 
            required
            className={`${inputStyles} h-32 resize-none`}
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === "sending"}
          className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform active:scale-95
            ${status === "sending" ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"}
            bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {result && (
          <div className={`mt-4 p-3 rounded-xl text-sm font-medium text-center animate-fade-in
            ${status === "success" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : ""}
            ${status === "error" ? "bg-red-500/10 text-red-500 border border-red-500/20" : ""}
            ${status === "sending" ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" : ""}
          `}>
            {result}
          </div>
        )}
      </form>
    </div>
  );
}
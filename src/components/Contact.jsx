import { forwardRef, useContext } from "react";
import portfolioData from "../data/PortfolioData.js";
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";
import ContactForm from "./ContactForm.jsx";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  useScroll(ref, "animate-fadeInUp", 3);

  const contactInfo = [
    {
      label: "Email",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      icon: <EmailIcon />,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/tarun-kumar-kushwaha-32b626b8/",
      icon: <PhoneIcon />,
    },
    {
      label: "Mobile",
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`,
      icon: <LinkedInIcon sx={{ color: "blue" }} />,
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${darkmode ? "text-white" : "text-slate-900"}`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg md:text-xl font-medium max-w-2xl mx-auto ${darkmode ? "text-slate-400" : "text-slate-600"}`}
          >
            Interested in freelance work or job opportunities? Let's build
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div
              className={`p-8 rounded-3xl border backdrop-blur-xl transition-all
              ${darkmode ? "bg-slate-900/40 border-white/10" : "bg-white/60 border-slate-200 shadow-xl"}`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${darkmode ? "text-blue-400" : "text-blue-600"}`}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all 
                      ${darkmode ? "bg-slate-800 group-hover:bg-blue-600" : "bg-slate-100 group-hover:bg-blue-500"} 
                      group-hover:scale-110 group-hover:text-white`}
                    >
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <p
                        className={`text-xs uppercase tracking-widest font-bold opacity-50 ${darkmode ? "text-white" : "text-slate-900"}`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-sm md:text-base font-semibold group-hover:text-blue-500 transition-colors ${darkmode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-tighter">
                  Open for new opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className={`rounded-3xl ${darkmode ? "bg-blue-500/5" : "bg-slate-100/50"}`}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;

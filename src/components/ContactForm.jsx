import { useState } from "react"
export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f52bbf93-d833-4702-9541-72bb434890ad");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setTimeout(() => {
                setResult("");
            }, 5000);
        } else {
            console.log("Error", data);
            setResult(data.message);
            setTimeout(() => {
                setResult("");
            }, 5000);
        }

    };

    return (
        <div className="w-96 p-2">
            <form onSubmit={onSubmit} className="w-[80%] mx-auto bg-indigo-500 shadow-lg rounded-lg md:p-6 p-3 space-y-6">
                <input type="text" placeholder="name" name="name" required className="mt-1 block md:w-full w-full mx-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <input type="email" placeholder="email" name="email" required className="mt-1 block md:w-full w-full mx-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <textarea name="message" placeholder="message" className="mt-1 block md:w-full w-full mx-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32" required></textarea>

                <button type="submit" className="md:w-full w-full mx-auto bg-violet-800 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg sm:text-sm">Submit Form</button>

            </form>
            <span>{result}</span>

        </div>
    );
}
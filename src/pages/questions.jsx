import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const questions = () => {
    const router = useRouter();

    const generatedQuestions = [
        {
            question: "How long have you been experiencing symptoms such as blurry vision or eye discomfort?",
            placeholder: "Enter the Answer"
        },
        {
            question: "Have you noticed any changes in your vision recently, such as difficulty seeing at night or peripheral vision loss?",
            placeholder: "Enter the Answer"
        },
        {
            question: "Do you wear glasses or contact lenses? If so, when was your last vision checkup?",
            placeholder: "Enter the Answer"
        },
        {
            question: "Have you ever had any eye injuries or surgeries in the past?",
            placeholder: "Enter the Answer"
        },
        {
            question: "Do you have a family history of eye conditions such as glaucoma, macular degeneration, or cataracts?",
            placeholder: "Enter the Answer"
        },
        {
            question: "Are you currently experiencing any pain, redness, or sensitivity to light in your eyes?",
            placeholder: "Enter the Answer"
        }
    ];

    const handleSubmit = (e) => {
        router.push('/recommendation');
        e.preventDefault();
        console.log("test")
        // window.location.href = '/recommendation';
    };

    return (
        <section className="">
            <div className="w-full lg:w-1/2 px-4 mx-auto pt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#e2e8f0] border-0">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-center mb-5 mt-5">
                            <h6 className="text-[#475569] text-lg font-bold">
                                Questions
                            </h6>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {generatedQuestions.map((q, index) => (
                                <div key={index} className="relative w-full mb-3">
                                    <label className="block text-[#475569] text-base font-bold mb-2">{q.question}</label>
                                    <input type="text" className="border-0 px-3 py-3 placeholder-[#94a3b8] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder={q.placeholder} />
                                </div>
                            ))}
                            <div className="text-center mt-6">
                                <button className="bg-[#1e293b] text-white active:bg-[#475569] text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit" href="/recommendation"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default questions
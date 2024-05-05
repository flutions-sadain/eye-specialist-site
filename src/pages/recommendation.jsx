import React from 'react';

const Recommendation = () => {
    const recommendationData = {
        heading: "Recommended Eye Care Practices",
        description: "Here are some recommended practices and actions based on your consultation with an eye specialist.",
        items: [
            {
                title: "Regular Eye Exams",
                description: "Schedule regular eye checkups to monitor your vision health and detect any potential issues early on."
            },
            {
                title: "Use Proper Eyewear",
                description: "If prescribed, ensure you wear glasses or contact lenses as recommended by your eye specialist to correct your vision."
            },
            {
                title: "Eye Protection",
                description: "Wear protective eyewear, such as safety glasses or goggles, during activities that pose a risk of eye injury."
            },
            {
                title: "Maintain Healthy Habits",
                description: "Follow a balanced diet rich in vitamins and minerals beneficial for eye health, and avoid habits like smoking which can harm your vision."
            },
            {
                title: "Monitor Screen Time",
                description: "Take regular breaks when using digital screens for extended periods to reduce eye strain and fatigue."
            },
            {
                title: "Follow Treatment Plans",
                description: "Adhere to any prescribed treatment plans or medication regimens provided by your eye specialist to manage any existing eye conditions."
            }
        ]
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto">
                <div className="grid gap-12">
                    <div>
                        <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                            {recommendationData.heading}
                        </h2>
                        <p className="mt-3 text-gray-800">
                            {recommendationData.description}
                        </p>
                    </div>

                    <div className="space-y-6 lg:space-y-10">
                        {recommendationData.items.map((item, index) => (
                            <div className="flex" key={index}>
                                <svg className="flex-shrink-0 mt-2 w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 10v12"></path>
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                </svg>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommendation;

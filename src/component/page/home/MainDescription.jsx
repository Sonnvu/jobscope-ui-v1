import TextAnimation from "../../util/animation/TextAnimation";

const TEXT1 = ['Skill Sets', 'Job Trends', 'Qualifications'];
const TEXT2 = ['Software Engineering', 'Ansys', 'Intel', 'Embedded Engineering'];
export default function MainDescription() {
    return (
        <div className="relative w-full flex flex-col justify-items-start bg-slate-50 pl-40 space-y-3.5 bg-blue-50">
            <div className="font-poppins font-semibold text-5xl bg-slate-50 space-y-2 bg-red-50">
                <div>
                    <p>Explore Current</p>
                </div>
                <div>
                    <TextAnimation TEXTS={TEXT1}/>
                </div>
                <div>
                    <p className="">For</p>
                </div>
                <div>
                    <TextAnimation TEXTS={TEXT2}/>
                </div>
            </div>

            <p className="text-lg font-normal text-gray-700 pr-10">And more insights in your
                interested field, major and company for a tailored skill set
            </p>
            <button className="px-4 py-2.5 mr-auto rounded-xl font-bold text-white bg-blue-500">
                Discover More
            </button>
        </div>
    )
}

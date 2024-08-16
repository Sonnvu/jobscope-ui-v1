import Header from "../../header/Header";
import SearchInput from "./SearchInput";
import ResultBarGraph from "./ResultBarGraph";
import ResultGeoGraph from "./ResultGeoGraph";
import CompanyListResult from "./CompanyListResult";

export default function Explore() {
    return (
        <div>
            <Header />
            <SearchInput />
            <div className="bg-slate-100">
                <div className="py-10 space-y-5 mx-80">
                    <ResultBarGraph />
                    <div className="relative flex flex-row space-x-5">
                        <ResultGeoGraph />
                        <CompanyListResult />
                    </div>
                </div>
            </div>
        </div>
    )
}
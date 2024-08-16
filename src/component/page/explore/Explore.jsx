import Header from "../../header/Header";
import SearchInput from "./SearchInput";
import ResultBarGraph from "./ResultBarGraph";
import ResultGeoGraph from "./ResultGeoGraph";

export default function Explore() {
    return (
        <div>
            <Header />
            <SearchInput />
            <div className="bg-slate-100 py-10 space-y-5">
                <ResultBarGraph />
                <ResultGeoGraph />
            </div>
        </div>
    )
}
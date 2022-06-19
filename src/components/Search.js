import { useSearchParams } from "react-router-dom"

const developers = ["Virgo", "Toyo", "Freke", "Ajibola", "Ezekeil", "Fred", "Abas"]

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("name") || ""
    const handleSearch = event => {
        event.preventDefault();
        const name = event.target.value;
        if (name) {
            setSearchParams({ name })
        } else {
            setSearchParams({})
        }
    }
    const addDeveloper = (e) => {
        const item = e.target.value = searchTerm
        if (item) {
            developers.push(item)
        } else if (item = "") {
            return
        } 
    }
    return(
        <div className=" container d-flex justify-content-center mt-5">
            <div className="search__package p-5 mt-2">
                <div>
                    <h3 className="text-center text-white">Search Developers</h3>
                    <div class="input-group mb-3">
                    <input type="text" onChange={handleSearch} value={searchTerm} 
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            const item = e.target.value = searchTerm
                            developers.push(item)
                        }
                    }} class="form-control" placeholder="find names" aria-label="Username" aria-describedby="basic-addon1" />
                    <button onClick={addDeveloper} className="btn btn-dark">Add Developer</button>
                </div> 
                <div>
                    {developers.filter((developer) => developer.toLowerCase().includes(searchTerm.toLowerCase())).map((developer, i) => (
                        <ul>
                            <li key={i}>{developer}</li>
                        </ul>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}
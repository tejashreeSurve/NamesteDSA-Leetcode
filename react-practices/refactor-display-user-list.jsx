import { useEffect, useMemo } from "react";

function useFetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{signal});
                if (!response.ok) throw new Error("Network response was not ok...");

                const json = await response.json();
                setData(json);
                setError(null);
            } catch (error) {
                if (error.namep === "AbortError") {
                    console.log('Fetch aborted');
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        // 1. cleanup function, Runs when the component unmount or before the next effect runs
        return () => {
            controller.abort();
        }        
    }, [])
    
    return { data, loading, error };
}


export default function App() {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("none");
    const { data, loading, error } = useFetchData();

    // move this hook at top
    const derivedState = useMemo(() => {
        let result = data.filter((item) => item.username.toLowerCase().includes(search.toLowerCase()));
        
        if (sortOrder === "ac") {
            result.sort((a, b) => a.username.localeCompare(b.username))
        } else if (sortOrder === 'dc') {
            result.sort((a, b) => b.username.localeCompare(a.username));
        }

        return result;
    }, [search, sortOrder, data]);

    if (loading) return (<div>Loading.....</div>);
    if (error) return (<div>Error: {error}</div>)

    return (
        <div>
            <h1>List</h1>
            <div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={()=>setSortOrder('ac')}>Sort Acc</button>
                <button onClick={()=>setSortOrder('dc')}>Sort Dec</button>
            </div>
            {filterData.length ? (
        <ul>
          {derivedState.map(({ id, name, username }) => (
            <li key={id}>
              {name} - {username}
            </li>
          ))}
        </ul>
      ) : (
        <span>No data.</span>
      )}
        </div>
    )
}
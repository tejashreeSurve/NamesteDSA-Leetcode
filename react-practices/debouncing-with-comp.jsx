import { useEffect, useState } from "react"

// in js basic code
// const debouncing = function (fn, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     let context = this;
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };


function useDebounce(value, delay) {
    const [debounceVal, setDebounceVal] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounceVal(value);
        }, delay);

        return () => clearTimeout(timer);
    },[value])

    return debounceVal;
    
}
export default function App() {
    const [search, setSearch] = useState();
    const debounceSearch = useDebounce(search, 3000);
    useEffect(() => {
        if (!debounceSearch) return;

        console.log(debounceSearch)
    },[debounceSearch])

    return (
        <div>
            <h1>Practicing Debouncing with React component</h1>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <label htmlFor="search">Search</label>
                <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
            </div>
        </div>
    )
}
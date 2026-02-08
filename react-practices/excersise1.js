/**
 * Write a psedue code for this scenarios in JS 
 * 
 * 1. user click on export button
 * 2. make api  call to fetch list of the employ
 * 3. convert the josn response to csv file
 * 4. triggered the downlaod of the csv file
 * 
 * In case of downlaod error, we should still trigger the download with the csv containing error message
 * Suppose  on click of the export button, we triggers four different api call even if one of the call fails, we should still wait for the data from the other API call 
 * on success we convert the josn to csv and triggered the downlaod
 */

async function handleExportClick() {
    const endpoint = ['/ep1', "/ep2", '/ep3', '/ep4'];

    try {

        // triggered an api call
        const response = await Promise.allSettled(
            endpoint.map((url) => fetch(url).then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                return res.json();
            }))
        )

        // 2. combine the data and check the errors
        let combineData = [];
        let errors = [];

        response.forEach((res, index) => {
            // Each promise has this res.reason(if error occurs), res.status(fulfilled / rejected), res.value (response if succes happen)
            if (res.status === "fulfilled") {
                combineData = [...combineData, ...res.value];
            } else {
                errors.push(`API ${index + 1} failed: ${res.reason}`);
            }
        })

        // 3. Determine content
        let csvContent = "";
        if (combineData.length > 0) {
            csvContent = convertToCSV(combineData);
            // append warnings if some API's failed but others succeeded
            if (errors.length > 0) {
                csvContent += "\n\n---- Error ---\n" + errors.join("\n");
            }
        } else {
            // if every thing fails
            csvContent = "Error: Could not export data.\n" + errors.join("\n");
        }


        // once done conversion to csv triggred download
        downloadFile(csvContent, 'employees_export.csv');
        
    } catch (error) {
        downloadFile(`Error during download: ${error.message}`, "export_error.csv");    
    }
}

// json to csv logic
function convertToCSV(data) {
    if (!data.length) return "";
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(row =>
        Object.values(row).map(val => `"${val}"`).join(",")
    );

    return [headers, ...rows].join("\n");
}

// browser Download trigger
function downloadFile(content, fileName) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


    // clean up memory
    URL.revokeObjectURL(url);
}


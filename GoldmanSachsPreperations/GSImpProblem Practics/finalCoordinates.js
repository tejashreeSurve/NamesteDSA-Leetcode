/* Given a function that receives a string of directions ("U", "D", "L", "R"), 
track and return the final (x, y) coordinates starting from (0, 0). */

function finalCordinates(direction) {
    let x = 0, y = 0;
    for (let char of direction) {
        if (char === "U") y++;
        if (char === "D") y--;
        if (char === "L") x--;
        if (char === "R") x++;
    }

    console.log([x, y]);
}

finalCordinates("UDLR");
finalCordinates("RRUU");
finalCordinates("UURDDL");
finalCordinates("");
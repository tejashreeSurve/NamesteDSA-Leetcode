let m = 4;
let n = 5;



/*      *
       ***
      *****
     *******
    ********* */

for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n-i-1; j++){
        row = row + " ";
    }
    for (let j = 0; j <= i; j++){
        row = row + "*";
    }
       for (let j = 0; j < i; j++){
        row = row +  "*";
    }
    console.log(row);
}


/* 1
   01
   010
   1010
   10101  */

let c = 0
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <= i; j++){
        c = c === 0 ? 1 : 0;
        row = row + c;
    }
    console.log(row);
}


/* 1
   10
   101
   1010
   10101  */
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <= i; j++){
        row = row + (j % 2 === 0 ? 1 : 0);
    }
    console.log(row);
}



/*      *
       **
      ***
     ****
    *****   */

for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n-i-1; j++){
        row = row + " ";
    }
    for (let j = 0; j <= i; j++){
        row = row + "*";
    }
    console.log(row);
}
console.log("---------------------")



/*  12345
    1234
    123
    12
    1 */
for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j <= n-i+1; j++){
        row = row + j;
    }
    console.log(row);
}

console.log("---------------------")
/*  1
    22
    333
    4444
    55555 */

for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row = row + i
    }
    console.log(row);
}

/*  1
    12
    123
    1234
    12345 */

for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row = row + j
    }
    console.log(row);
}



/*  * * * *
    * * * *
    * * * *
    * * * *     */
for (let i = 0; i < m; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row + "*"
    }
    console.log(row);
}


/*  *
    **
    ***
    ****    */
for (let i = 0; i < m; i++){
    let row = "";
    for (let j = 0; j <= i; j++){
        row = row + "*"
    }
    console.log(row);
}


/*  *********
     *******
      *****
       ***
        *   */


for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < i; j++){
        row = row + " ";
    }
    for (let j = 0; j < n-i; j++){
        row = row + "*";
    }
    for (let j = 1; j< n-i; j++){
        row = row + "*"
    }

    console.log(row);
}

console.log("----------------------");

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// *****
// *   *
// *   *
// *   *
// *****


//     *
//    * *
//   *   *
//  *     *
// *********


// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *

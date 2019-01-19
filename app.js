
document.querySelector('button').addEventListener('click', function getValues(){

    matrix(4,4)
})

function matrix(m,n){
    let output = ''
    var result = []
    for (var i = 0; i < n; i++){
        result.push(new Array(m).fill(i))
    }   
   console.log(result)

   result.forEach(function(number){
       output += number + '<br/>'
   })


   document.querySelector("#display").innerHTML = `Array: <br/> ${output}`

   return sortMatrix(m, n, result)
}


function sortMatrix(a,b,c){
    let output = 'Result <br/>'
    k = 0; //starting row index
    l = 0; //starting col. index 
        //a : ending row index
        //b : ending col. index
    while ((k < a) & (l < b)){
        //print first row 
        for (var i = l; i < b ; ++i){
            console.log(c[k][i])
            output += c[k][i]
            // return (c[k][i])
        }
        k++

        //print last column 
        for (var i = k; i < a ; ++i){
            console.log(c[i][b-1])
            output += c[i][b-1] 
            // return (c[i][b-1])
        }
        b--

        //print last row 
        if (k < a){
            for (var i = (b-1); i >= l; --i){
                console.log(c[a-1][i])
                output += c[a-1][i] 
                // return (c[a-1][i])
            }
            a--
        }
        
        if (l < b){
            for (var i = (a-1); i >= k ; --i){
                console.log(c[i][l])
                output += c[i][l] 
                // return [c[i][l]]
            }
            l++
        } 
    }
    // return output
    document.querySelector('#output').innerHTML = output
}

//  document.querySelector('#output').innerHTML = matrix(2,2)
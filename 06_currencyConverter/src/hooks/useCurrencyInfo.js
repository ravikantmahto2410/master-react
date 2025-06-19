////////////////Ye bhi ek custom Hook hai////////////

// function hello(){                      
//     return [chingdu, setChingdu]
// }     
//these customHooks hooks can use builtIn Hooks


////////////////////////////////////////////////////////

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){   //currency ka naam koi bhi naamho sakta hai
    //ye hook return karega kuch data - 

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())  //response jo aaya hai usko pehle convert karo json mein, json mein convert karne ka kaafi tarike hai yahan par .json mein kaam ho jaayega agar nhi jamta to JSON.parse use kar skato ho
        .then((res) => setData(res[currency])) //array mein currency isliye likha hai kyonki hum objectke aage dot ke bajay [] se access lene wale hain
        console.log(data)
    },[currency]) //isss hook ko chahiye hoti hai do cheez ek callBack aur ek dependencies array , dependencies array isliye ki agar iss Hook mein agar koi change aayega to mein wapis se APi Call karunga
    console.log(data)
    return data
}

export default useCurrencyInfo;

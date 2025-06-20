


import React from "react";

const UserContext = React.createContext()

export default UserContext 





// import React from "react";


// //banana hai ek context
// //STEp-01
// const UserContext = React.createContext()   //Create ho gya ek context  //jaise useState sab ke mathod the waise createContext bhi ek method hai

// //Step - 02
// export default UserContext;

// //Now hamara context mil gya


//context ek major cheez dega provider  kyonki conetxt humein variable provide kar rha ahai to har ek context ek provider hota hai
//jaise app.jsx mein hum fragments ya div ke ander wrap karte the waise hi hum UserContext ke ander wrap karenge
//for example

/////////////////////////////////Jaise Hi humne iss tarah se wrap kara diya to ye ban jaayega provider
/* //Provider means simple : ki iske ander jo bhi component hai un saare components ko iss global UserContext ka access mil jaayega .  Context ko global object ki tarah hi maano
    <UserContext>
        <Login/>
        <Card>
            <Data/>
        </Card>
    </UserContext>
 */
/////////////////////////////////////////////////////////////////////////////////////







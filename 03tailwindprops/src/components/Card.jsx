// import React from 'react'

// function Card(props) {
//     console.log("props",props)

//     return (
//     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
//         <img
//           src="https://www.pexels.com/photo/man-in-white-dress-shirt-holding-suit-jacket-1043474/"
//           alt=""
//           className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//         />
//         <div className="mt-6 mb-2">
//           <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//             Daiba
//           </span>
//           <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
//         </div>
//         <p className="text-gray-300">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
//           amet
//         </p>
//       </div>
//   )
// }

// export default Card



////////////////////////////////// kya ho jab Card ke ander jo bhi value pass ho rha(username) but kya Card uss username ko use kar hai, to card uss username ko kaise use karega

// import React from 'react'

// function Card(props) {
//     console.log(props.username)

//     return (
//     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
//         <img
//           src="https://www.pexels.com/photo/man-in-white-dress-shirt-holding-suit-jacket-1043474/"
//           alt=""
//           className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//         />
//         <div className="mt-6 mb-2">
//           <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//             Daiba
//           </span>
//           <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
//         </div>
//         <p className="text-gray-300">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
//           amet
//         </p>
//       </div>
//   )
// }

// export default Card

        /////////////////since humko pata .object hai aur wahan se ek object hi pass ho rha hai , to kai baar shortcut ke lliye hum props ko hata ke direct hi destructring kar di jaati hai ,
    //     import React from 'react'

    // function Card({username,btnText}) {
    //     console.log(username)

    //     return (
    //     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
    //         <img
    //         src="https://www.pexels.com/photo/man-in-white-dress-shirt-holding-suit-jacket-1043474/"
    //         alt=""
    //         className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    //         />
    //         <div className="mt-6 mb-2">
    //         <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
    //             {username}
    //         </span>
    //         <h2 className="text-xl font-semibold tracking-wide">{btnText}</h2>
    //         </div>
    //         <p className="text-gray-300">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
    //         amet
    //         </p>
    //     </div>
    // )
    // }

    // export default Card



//what happens when koi coder koi ek card mein prop hi paass na kare      code - 03


function Card({username,btnText="Visit Me",Post}) {
        console.log(username,btnText,Post)

        return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
            <img
            src="https://www.pexels.com/photo/man-in-white-dress-shirt-holding-suit-jacket-1043474/"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {username}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{btnText}</h2>
            </div>
            <p className="text-gray-300">
            Lorem ipsum dolor {Post} sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
            </p>
        </div>
    )
}

export default Card


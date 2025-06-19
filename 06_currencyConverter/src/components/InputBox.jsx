// import React from 'react'


// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }) {
   

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label  className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
                    
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled = {amountDisable} //to check kya ye input field enabled hai ki disabled hai
//                     value={amount}
//                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //kabaar javascript events ke ander ki jo value hai wo unko string format mein le leti hai
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency}
//                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//                     disabled={currencyDisable}
//                 >
                    
//                         {currencyOptions.map((curr) => ( //jab bhi loop lagay kisi jsx ke ander to aap ko ek key pass karni chahiye  //ki agar loops chaiye to key ka dhyaan rakhe
//                             <option 
//                                 key={curr}  //key hum index bhi le skate hai but index se better option ye hota hai ki aap jo field aa rha hai wo le lo , id's bhi le sakte ho
//                                 value={curr}
//                             >
//                             {curr}
//                             </option>
//                         ))}
                
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;




//////////////////////More Optimised
import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    const amountInputId = useId()   //isse ek unique random value milegi using string numbers

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable} //to check kya ye input field enabled hai ki disabled hai
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //kabaar javascript events ke ander ki jo value hai wo unko string format mein le leti hai
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((curr) => ( //jab bhi loop lagay kisi jsx ke ander to aap ko ek key pass karni chahiye  //ki agar loops chaiye to key ka dhyaan rakhe
                            <option 
                                key={curr}  //key hum index bhi le skate hai but index se better option ye hota hai ki aap jo field aa rha hai wo le lo , id's bhi le sakte ho
                                value={curr}
                            >
                            {curr}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


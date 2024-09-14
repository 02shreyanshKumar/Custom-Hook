import React, { useId } from 'react'

const InputBox = ({label,amount,onAmountChange,onCurrencyChange,selectOption="usd",currencyOption=[],amountDisable=false,currencyDisable=false,className=""}) => {
    const paswordId=useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={paswordId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={paswordId}
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectOption}
                    disabled={currencyDisable}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOption.map((currency)=>(
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox
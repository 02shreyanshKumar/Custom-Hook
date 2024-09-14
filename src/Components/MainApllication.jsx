import React, { useState } from 'react'
import {InputBox} from './index';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
const MainApllication = () => {
    const [amount,setAmount]=useState("");
    const [from ,setFrom]=useState("usd");
    const [to,setTo]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState("");
    const currencyInfo=useCurrencyInfo(from);
    const options=Object.keys(currencyInfo);
    const convert=()=>{
        setConvertedAmount(amount * currencyInfo[to])
    }
    const swap=()=>{
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }
    const bg_img="https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${bg_img}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(c)=>setFrom(c)}
                                selectOption={from}
                                currencyOption={options}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onCurrencyChange={(c)=>setTo(c)}
                                selectOption={to}
                                currencyOption={options}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainApllication
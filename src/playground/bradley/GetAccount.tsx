import { useState } from "react";

export default function GetAccount(){

        const urlBase = "https://695f03af7f037703a8128fbf.mockapi.io/api/v1/Account"
        let [accountID, setAccountID] = useState("")
        
        var Submit = async function() {
            let req = await fetch(urlBase+"/"+accountID)
            let res = await req.json()
            setAccountID(res)
        }

    return (
        <>
                <input 
                    placeholder="Enter your account ID"
                    value={accountID}
                    onChange={(e) => setAccountID(e.target.value) }
                ></input>

                <button 
                    type = "button"
                    onClick={Submit}
                > Submit </button>  
                              
                <div>
                    <p>
                        {accountID ? (<pre>{JSON.stringify(accountID)}</pre>) : null}                
                    </p>
                </div>
        </>
    )
}
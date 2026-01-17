import { useState } from "react";

 function GetAccount(){

        const urlBase = "https://695f03af7f037703a8128fbf.mockapi.io/api/v1/Account"
        let [accountID, setAccountID] = useState("")
        
        var Submit = async function() {
            let req = await fetch(urlBase+"/"+accountID)
            let res = await req.json()
            setAccountID(res)
        }

    return (
        <>
                <input placeholder="Input desired account ID"
                    value={accountID}
                    onChange={(e) => setAccountID(e.target.value) }
                ></input>

                <button 
                    type = "button"
                    onClick={Submit}
                > Submit </button>  
                              
                {accountID ? (<p>{JSON.stringify(accountID)}</p>) : null}
        </>
    )
}

export default GetAccount
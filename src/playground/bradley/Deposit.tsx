import { useState } from "react"

export default function BradleyComponent2() {
        const urlBase = "https://695f03af7f037703a8128fbf.mockapi.io/api/v1/Account"
        let [accountID, setAccountID] = useState("")
        let [amount, setAmount] = useState("")
        let [entered, setEntered] = useState(Boolean)
        
        var Submit = async function(){
            let req = await fetch(urlBase+"/"+accountID)
            let res = await req.json()
            return res
        }

        var SubmitAccountID = async function () {
            let res = await Submit()
            setAccountID(res.id)
            setEntered(true)
        }

        var SubmitBalance = async function (amount: any) {
            let res = await Submit()
            setAmount(res.balance += Number(amount))
            setEntered(true)
        }

        var Reset = async function() {
            setEntered(false)
        }

    return (
        <>
            
            {entered == false ? (
                <div>
                <input 
                    placeholder="Enter your account ID"
                    value={accountID}
                    onChange={(e) => setAccountID(e.target.value)}
                ></input>

                <button 
                    type= "button"
                    onClick={SubmitAccountID}
                > Submit ID</button>  
                </div>
            ) :   
                <div>
                <input 
                    placeholder="Enter Deposit Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                ></input> 

                <button
                    type="button"
                    onClick={SubmitBalance}
                > Submit Amount</button>
                
                <button
                    type="button"
                    onClick={Reset}
                > Can i have a Mulligan?</button>
                
                </div>       
            }
        </>
    )
}
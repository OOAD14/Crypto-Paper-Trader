import React, { useState } from 'react'
import { basicAxios } from '../api/customAxios'
import Success from "../components/Success"
import { Input, Button } from "@nextui-org/react";
import { Alert } from 'react-bootstrap';

const Sell = ({ name, price, change, balance, setChange, setBalance }) => {
    const [quantity, setQuan] = useState("0")
    const [amount, setAmount] = useState("0")
    const [show, setShow] = useState(false)
    const [psell, setPsell] = useState(price)
    const [error, setError] = useState("")

    const sold = async (e) => {
        e.preventDefault()
        try {
            if (parseInt(quantity) <= 0) throw new Error("Quantity should be more than zero")
            await basicAxios.post("/trading/sell/", {
                jwt_token: localStorage.getItem("jwt_token"),
                stock_name: name,
                stock_quantity: parseInt(quantity),
                stock_price: parseFloat(psell),
            })
            const res1 = await basicAxios.post("/trading/getbalance/", {
                jwt_token: localStorage.getItem("jwt_token")
            })
            setBalance(res1.data.balance);
            
            setQuan(0);
            setAmount(0);
            setShow(true);
        }
        catch (err) {
            setError(err?.message || "Error occured while searching")
        }
    }
    return (
        <form onSubmit={sold} noValidate>
            {error !== "" && (
                <div className="mt-2">
                <Alert type="warning" role="alert">
                    {error}
                </Alert>
                </div>
            )}
            {show && <Success success_text={"Sold"} />}
            <div className="form-floating mb-3">
                <Input
                    type="text"
                    value={price}
                    readOnly={true}
                    id="buy-price"
                    placeholder="Price"
                    variant="underlined"
                    label="Price"
                />
            </div>
            <div className="form-floating mb-3">
                <Input
                    value={quantity}
                    type="text"
                    id="sell-quantity"
                    placeholder="Quantity"
                    variant="underlined"
                    label="Quantity"
                    onChange={(e) => {
                        setQuan(e.target.value);
                        const am = (Math.round(
                        (parseFloat(psell) || "0") * parseInt((e.target.value) || "0") * 100
                        ) / 100).toString();
                        setAmount(am);
                    }}
                />
            </div>
            <div className="form-floating mb-3">
                <Input
                    readOnly={true}
                    value={amount}
                    type="text"
                    id="sell-invest-amount"
                    placeholder="Investment Amount"
                    variant="underlined"
                    label="Investment Amount"
                />
            </div>
            <div className="modal-footer border-0">
                <div className="text-center mt-8 mb-5">
                <Button
                    color="danger"
                    variant="ghost"
                    className="buy-btn w-1/5"
                    type="submit"
                >
                    SELL
                </Button>
                </div>
            </div>
        </form>

    )
}

export default Sell
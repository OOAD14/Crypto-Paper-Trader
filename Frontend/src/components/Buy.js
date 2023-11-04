import React, { useState } from 'react'
import { basicAxios } from "../api/customAxios"
import Success from "../components/Success"
import { Input, Button } from "@nextui-org/react";
import { Alert } from 'react-bootstrap';

const Buy = ({ name, price, change, balance, setChange, setBalance }) => {
    const [quantity, setQuan] = useState("0")
    const [amount, setAmount] = useState("0")
    const [show, setShow] = useState(false)
    const [error, setError] = useState("")

    const bought = async (e) => {
        e.preventDefault()

        const buyData = {
            jwt_token: localStorage.getItem("jwt_token"),
            stock_name: name, 
            stock_price: parseInt(price), 
            stock_quantity: parseInt(quantity), 
        };

        try {
            if (parseInt(quantity) <= 0) throw new Error("Quantity should be more than zero")
            const response = await basicAxios.post("/trading/buy/", buyData);
            const res1 = await basicAxios.post("/trading/getbalance/", {
                jwt_token: localStorage.getItem("jwt_token")
            })
            setBalance(res1.data.balance)

            setQuan(0)
            setAmount(0)
            setShow(true)
        }
        catch (err) {
            setError(err?.message || "Error occured while searching")
        }
    }

    return (
        <form onSubmit={bought} noValidate>
            {error !== '' && (
                <Alert type="warning" className="mt-4">
                {error}
                </Alert>
            )}
            {show && <Success success_text="Bought" />}
            <div className="mb-3">
                <Input
                type="text"
                value={price}
                readOnly
                id="buy-price"
                placeholder="Price"
                variant="underlined"
                label="Price"
                />
            </div>
            <div className="mb-3">
                <Input
                type="text"
                value={quantity}
                id="buy-quantity"
                placeholder="Quantity"
                variant="underlined"
                label="Quantity"
                onChange={(e) => {
                    setQuan(e.target.value);
                    const am = (
                    (Math.round(100 * parseFloat(price) * parseInt(e.target.value || '0')) / 100)
                    ).toString();
                    setAmount(am);
                }}
                />
            </div>
            <div className="mb-3">
                <Input
                type="text"
                value={amount}
                readOnly
                id="buy-invest-amount"
                placeholder="Investment Amount"
                variant="underlined"
                label="Investment Amount"
                />
            </div>
            <div className="modal-footer border-0">
                <div className="text-center mt-8 mb-5">
                <Button
                    color="success"
                    variant="ghost"
                    className="buy-btn w-1/5"
                    type="submit"
                >
                    BUY
                </Button>
                </div>
            </div>
        </form>
    )
}

export default Buy
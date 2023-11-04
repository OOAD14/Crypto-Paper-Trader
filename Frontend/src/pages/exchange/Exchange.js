import React, { useEffect, useState } from 'react'
import { basicAxios } from "../../api/customAxios"
import CustomNavbar from '../../components/customnavbar/CustomNavbar';
import TradingViewWidget from '../../components/TradingViewWidget';
import TradingViewScreenerWidget from '../../components/TradingViewScreenerWidget';

const Exchange = () => {
    const [balance, setBalance] = useState("");
    const [change, setChange] = useState(0);

		// let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
		// setTimeout(ws1.onmessage = async (event) => {
		// 		let stockObject = JSON.parse(event.data);
		// 		let pricing = parseInt(stockObject.p);

		// 		const res1 = await basicAxios.post("/trading/getbalance/", {
		// 				jwt_token: localStorage.getItem("jwt_token")
		// 		})

		// 		const res4 = await basicAxios.post("/trading/getstock/", {
		// 				jwt_token: localStorage.getItem("jwt_token")
		// 		})

		// 		let prev_wealth = res1.data.balance, current_wealth = 0;
		// 		for (let i = 0; i < res4.data.length; i++) {
		// 				if (res4.data[i].stock_name === "BTC") {
		// 					current_wealth += (parseInt(pricing) * (parseInt(res4.data[i].stock_quantity)))
		// 				} else {

		// 				}						
		// 		}	
				
		// 		let del = prev_wealth + current_wealth - 100000
		// 		setBalance(res1.data.balance);
		// 		setChange(del);
		// },  2000)

    useEffect(() => {
        const func = async () => {
            try {
                const res1 = await basicAxios.post("/trading/getbalance/", {
                    jwt_token: localStorage.getItem("jwt_token")
                })
                setBalance(res1.data.balance)
            }
            catch (err) {}
        }
        func();
    }, []);
    return (
        <div style = {{ overflow: "hidden" }}>
            <CustomNavbar isDashboard={true} isStockWindow={false} isTransaction={false} />
			
			<div style={{ height: 600, display: 'flex' }}>
				<div style={{ flex: 4, height: '100%' }}>
					<div style={{ width: 400, padding: '10px' }}>
						<div class="tradingview-screener-widget-container">
							<TradingViewScreenerWidget />
						</div>
					</div>
				</div>
				<div style={{ flex: 6, height: '90%' }}>
					<div style={{ height: '100%', padding: '10px' }}>
					<div class="main-chart mb-15" style={{ height: '100%' }}>
						<TradingViewWidget />
					</div>
					</div>
				</div>
			</div>

		
        </div>
    )
}

export default Exchange
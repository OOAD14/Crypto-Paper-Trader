import React, { useEffect, useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { basicAxios } from '../../api/customAxios';
import { Text, Textarea, Spinner, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'; // Import Next UI components
import CustomNavbar from '../../components/customnavbar/CustomNavbar';
import './market.css'
import Buy from '../../components/Buy';
import Sell from '../../components/Sell';


let lastP1 = null;
let lastP2 = null;
let lastP3 = null;
let lastP5 = null;
let lastP7 = null;
let lastP9 = null;
let lastP10 = null;
let lastP11 = null;
let lastP12 = null;
let lastP14 = null;
const BASE_URL = 'https://api.exchangeratesapi.io/latest'


const Market = () => {

	const [balance, setBalance] = useState('');
	const [change, setChange] = useState(0);
	const [pricing1, setpricing1] = useState(null);
	const [price_fluctuation1, setprice_fluctuation1] = useState({ color: 'white' });
	const [curr1, setCurr1] = useState(0);
	const [showBuy1, setShowBuy1] = useState(false);
	const [showSell1, setShowSell1] = useState(false);



	const popupBuy1 = async (e) => {
		if (!showBuy1) {
			setCurr1(parseInt(pricing1));
		}
		setShowBuy1(!showBuy1);
	};

	const popupSell1 = async (e) => {
		if (!showSell1) {
			setCurr1(parseInt(pricing1));
		}
		setShowSell1(!showSell1);
	};

	const [pricing2, setpricing2] = useState(null);
	const [price_fluctuation2, setprice_fluctuation2] = useState({ color: 'white' });
	const [curr2, setCurr2] = useState(0);
	const [showBuy2, setShowBuy2] = useState(false);
	const [showSell2, setShowSell2] = useState(false);
	const [valinr, setValinr] = React.useState("");
	const popupBuy2 = async (e) => {
		if (!showBuy2) {
			setCurr2(parseInt(pricing2));
		}
		setShowBuy2(!showBuy2);
	};

	const popupSell2 = async (e) => {
		if (!showSell2) {
			setCurr2(parseInt(pricing2));
		}
		setShowSell2(!showSell2);
	};

	const [pricing3, setpricing3] = useState(null);
	const [price_fluctuation3, setprice_fluctuation3] = useState({ color: 'white' });
	const [curr3, setCurr3] = useState(0);
	const [showBuy3, setShowBuy3] = useState(false);
	const [showSell3, setShowSell3] = useState(false);

	const popupBuy3 = async (e) => {
		if (!showBuy3) {
			setCurr3(parseInt(pricing3));
		}
		setShowBuy3(!showBuy3);
	};

	const popupSell3 = async (e) => {
		if (!showSell3) {
			setCurr3(parseInt(pricing3));
		}
		setShowSell3(!showSell3);
	};

	const [pricing5, setpricing5] = useState(null);
	const [price_fluctuation5, setprice_fluctuation5] = useState({ color: 'white' });
	const [curr5, setCurr5] = useState(0);
	const [showBuy5, setShowBuy5] = useState(false);
	const [showSell5, setShowSell5] = useState(false);

	const popupBuy5 = async (e) => {
		if (!showBuy5) {
			setCurr5(parseInt(pricing5));
		}
		setShowBuy5(!showBuy5);
	};

	const popupSell5 = async (e) => {
		if (!showSell5) {
			setCurr5(parseInt(pricing5));
		}
		setShowSell5(!showSell5);
	};

	const [pricing7, setpricing7] = useState(null);
	const [price_fluctuation7, setprice_fluctuation7] = useState({ color: 'white' });
	const [curr7, setCurr7] = useState(0);
	const [showBuy7, setShowBuy7] = useState(false);
	const [showSell7, setShowSell7] = useState(false);

	const popupBuy7 = async (e) => {
		if (!showBuy7) {
			setCurr7(parseInt(pricing7));
		}
		setShowBuy7(!showBuy7);
	};

	const popupSell7 = async (e) => {
		if (!showSell7) {
			setCurr7(parseInt(pricing7));
		}
		setShowSell7(!showSell7);
	};

	const [pricing9, setpricing9] = useState(null);
	const [price_fluctuation9, setprice_fluctuation9] = useState({ color: 'white' });
	const [curr9, setCurr9] = useState(0);
	const [showBuy9, setShowBuy9] = useState(false);
	const [showSell9, setShowSell9] = useState(false);

	const popupBuy9 = async (e) => {
		if (!showBuy9) {
			setCurr9(parseInt(pricing9));
		}
		setShowBuy9(!showBuy9);
	};

	const popupSell9 = async (e) => {
		if (!showSell9) {
			setCurr9(parseInt(pricing9));
		}
		setShowSell9(!showSell9);
	};

	const [pricing10, setpricing10] = useState(null);
	const [price_fluctuation10, setprice_fluctuation10] = useState({ color: 'white' });
	const [curr10, setCurr10] = useState(0);
	const [showBuy10, setShowBuy10] = useState(false);
	const [showSell10, setShowSell10] = useState(false);

	const popupBuy10 = async (e) => {
		if (!showBuy10) {
			setCurr10(parseInt(pricing10));
		}
		setShowBuy10(!showBuy10);
	};

	const popupSell10 = async (e) => {
		if (!showSell10) {
			setCurr10(parseInt(pricing10));
		}
		setShowSell10(!showSell10);
	};

	const [pricing11, setpricing11] = useState(null);
	const [price_fluctuation11, setprice_fluctuation11] = useState({ color: 'white' });
	const [curr11, setCurr11] = useState(0);
	const [showBuy11, setShowBuy11] = useState(false);
	const [showSell11, setShowSell11] = useState(false);

	const popupBuy11 = async (e) => {
		if (!showBuy11) {
			setCurr11(parseInt(pricing11));
		}
		setShowBuy11(!showBuy11);
	};

	const popupSell11 = async (e) => {
		if (!showSell11) {
		setCurr11(parseInt(pricing11));
		}
		setShowSell11(!showSell11);
	};

	const [pricing12, setpricing12] = useState(null);
	const [price_fluctuation12, setprice_fluctuation12] = useState({ color: 'white' });
	const [curr12, setCurr12] = useState(0);
	const [showBuy12, setShowBuy12] = useState(false);
	const [showSell12, setShowSell12] = useState(false);

	const popupBuy12 = async (e) => {
		if (!showBuy12) {
			setCurr12(parseInt(pricing12));
		}
		setShowBuy12(!showBuy12);
	};

	const popupSell12 = async (e) => {
		if (!showSell2) {
			setCurr12(parseInt(pricing2));
		}
		setShowSell2(!showSell2);
	};


	const [pricing14, setpricing14] = useState(null);
	const [price_fluctuation14, setprice_fluctuation14] = useState({ color: 'white' });
	const [curr14, setCurr14] = useState(0);
	const [showBuy14, setShowBuy14] = useState(false);
	const [showSell14, setShowSell14] = useState(false);

	const popupBuy14 = async (e) => {
		if (!showBuy14) {
			setCurr14(parseInt(pricing14));
		}
		setShowBuy14(!showBuy14);
	};

	const popupSell14 = async (e) => {
		if (!showSell14) {
			setCurr14(parseInt(pricing14));
		}
		setShowSell14(!showSell14);
	};

	
	
	let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade'); // BTC == Bitcoin
	let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade'); // ETH == Ethereum
	let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade'); // BNB == Binance Coin
	let ws5 = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade'); // SOL == Solana
	let ws7 = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade'); // DOT == Polkadot 
	let ws9 = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade'); // AVAX == Avalanche
	let ws10 = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@trade'); // LINK == Chainlink
	let ws11 = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade'); // LTC == Litecoin
	let ws12 = new WebSocket('wss://stream.binance.com:9443/ws/bchusdt@trade'); // BCH == Bitcoin Cash
	let ws14 = new WebSocket('wss://stream.binance.com:9443/ws/etcusdt@trade'); // ETC == Ethereum Classic

	setTimeout(
		(ws1.onmessage = async (event) => {
		let stockObject = JSON.parse(event.data);
		let pricing1 = parseInt(stockObject.p);

		setpricing1(parseInt(pricing1));
		setprice_fluctuation1({
			color: !lastP1 || lastP1 === pricing1 ? 'white' : pricing1 > lastP1 ? 'green' : 'red',
		});

		lastP1 = pricing1;
		}),
		2000
	);

	setTimeout(
		(ws2.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing2 = parseInt(stockObject.p);
			setpricing2(parseInt(pricing2));

			setprice_fluctuation2({
				color: !lastP2 || lastP2 === pricing2 ? 'white' : pricing2 > lastP2 ? 'green' : 'red',
			});

			lastP2 = pricing2;
		}),
		2000
	);

	setTimeout(
		(ws3.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing3 = parseInt(stockObject.p);
			setpricing3(parseInt(pricing3));

			setprice_fluctuation3({
				color: !lastP3 || lastP3 === pricing3 ? 'white' : pricing3 > lastP3 ? 'green' : 'red',
			});

			lastP3 = pricing3;
		}),
		2000
	);

	setTimeout(
		(ws5.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing5 = parseInt(stockObject.p);
			setpricing5(parseInt(pricing5));

			setprice_fluctuation5({
				color: !lastP5 || lastP5 === pricing5 ? 'white' : pricing5 > lastP5 ? 'green' : 'red',
			});

			lastP5 = pricing5;
		}),
		2000
	);

	setTimeout(
		(ws7.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing7 = parseInt(stockObject.p);
			setpricing7(parseInt(pricing7));

			setprice_fluctuation7({
				color: !lastP7 || lastP7 === pricing7 ? 'white' : pricing7 > lastP7 ? 'green' : 'red',
			});

			lastP7 = pricing7;
		}),
		2000
	);

	setTimeout(
		(ws9.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing9 = parseInt(stockObject.p);
			setpricing9(parseInt(pricing9));

			setprice_fluctuation9({
				color: !lastP9 || lastP9 === pricing9 ? 'white' : pricing9 > lastP9 ? 'green' : 'red',
			});

			lastP9 = pricing9;
		}),
		2000
	);

	setTimeout(
		(ws10.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing10 = parseInt(stockObject.p);
			setpricing10(parseInt(pricing10));

			setprice_fluctuation10({
				color: !lastP10 || lastP10 === pricing10 ? 'white' : pricing10 > lastP10 ? 'green' : 'red',
			});

			lastP10 = pricing10;
		}),
		2000
	);

	setTimeout(
		(ws11.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing11 = parseInt(stockObject.p);
			setpricing11(parseInt(pricing11));

			setprice_fluctuation11({
				color: !lastP11 || lastP11 === pricing11 ? 'white' : pricing11 > lastP11 ? 'green' : 'red',
			});

			lastP11 = pricing11;
		}),
		2000
	);

	setTimeout(
		(ws12.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing12 = parseInt(stockObject.p);
			setpricing12(parseInt(pricing12));

			setprice_fluctuation12({
				color: !lastP12 || lastP12 === pricing12 ? 'white' : pricing12 > lastP12 ? 'green' : 'red',
			});

			lastP12 = pricing12;
		}),
		2000
	);

	setTimeout(
		(ws14.onmessage = async (event) => {
			let stockObject = JSON.parse(event.data);
			let pricing14 = parseInt(stockObject.p);
			setpricing14(parseInt(pricing14));

			setprice_fluctuation14({
				color: !lastP14 || lastP14 === pricing14 ? 'white' : pricing14 > lastP14 ? 'green' : 'red',
			});

			lastP14 = pricing14;
		}),
		2000
	);

	setInterval(async () => {
		const res1 = await basicAxios.post('/trading/getbalance/', {
			jwt_token: localStorage.getItem('jwt_token'),
		});

		const res4 = await basicAxios.post('/trading/getstock/', {
			jwt_token: localStorage.getItem('jwt_token'),
		});

		let prev_wealth = res1.data.balance, current_wealth = 0;

		for (let i = 0; i < res4.data.length; i++) {
			if (res4.data[i].stock_name === 'BTC') {
				current_wealth += parseInt(pricing1) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'ETH') {
				current_wealth += parseInt(pricing2) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'BNB') {
				current_wealth += parseInt(pricing3) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'SOL') {
				current_wealth += parseInt(pricing5) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'DOT') {
				current_wealth += parseInt(pricing7) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'AVAX') {
				current_wealth += parseInt(pricing9) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'LINK') {
				current_wealth += parseInt(pricing10) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'LTC') {
				current_wealth += parseInt(pricing11) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'BCH') {
				current_wealth += parseInt(pricing12) * parseInt(res4.data[i].stock_quantity);
			} else if (res4.data[i].stock_name === 'ETC') {
				current_wealth += parseInt(pricing14) * parseInt(res4.data[i].stock_quantity);
			} 
		}

		let del = prev_wealth + current_wealth - 100000;
		setBalance(res1.data.balance);
		if (!isNaN(del)){
			setChange(del);
		}
	},2000);


	useEffect(() => {
		const func = async () => {
			try {

				const res1 = await basicAxios.post('/trading/getbalance/', {
					jwt_token: localStorage.getItem('jwt_token'),
				});
		
				const res4 = await basicAxios.post('/trading/getstock/', {
					jwt_token: localStorage.getItem('jwt_token'),
				});
		
				let prev_wealth = res1.data.balance, current_wealth = 0;
		
				for (let i = 0; i < res4.data.length; i++) {
					if (res4.data[i].stock_name === 'BTC') {
						current_wealth += parseInt(pricing1) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'ETH') {
						current_wealth += parseInt(pricing2) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'BNB') {
						current_wealth += parseInt(pricing3) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'SOL') {
						current_wealth += parseInt(pricing5) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'DOT') {
						current_wealth += parseInt(pricing7) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'AVAX') {
						current_wealth += parseInt(pricing9) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'LINK') {
						current_wealth += parseInt(pricing10) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'LTC') {
						current_wealth += parseInt(pricing11) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'BCH') {
						current_wealth += parseInt(pricing12) * parseInt(res4.data[i].stock_quantity);
					} else if (res4.data[i].stock_name === 'ETC') {
						current_wealth += parseInt(pricing14) * parseInt(res4.data[i].stock_quantity);
					} 
				}
		
				let del = prev_wealth + current_wealth - 100000;
				setBalance(res1.data.balance);
				if (!isNaN(del)){
					setChange(del);
				}
			} catch (err) {}
		};
		func();
	}, []);

	return (
		<div className="dashbrd-container">
		<CustomNavbar isDashboard={false} isStockWindow={true} isTransaction={false} />
		<div class="container-fluid mtb15 no-fluid">
			<div className="flex">
				<div class="col-sm-12 col-md-3">
					<Textarea
					isDisabled
					key="flat1"
					variant="flat"
					label="Balance / Leverage"
					labelPlacement="inside"
					placeholder={`$${balance}`}
					className="dark text-foreground  max-w-xs ml-2.5 mr-5 mt-5 mb-5"
					style={{
						textAlign: 'center',
						color: 'white',
						padding: '40px',
						fontSize: '50px',
						marginTop: '15px',
						marginLeft: '5px',
						marginRight: '10px',
						marginBottom: '5px',
					}}
					/>
				</div>
				<div class="col-sm-12 col-md-6">
					<Textarea
					isDisabled
					key="flat2"
					status="default"
					variant="flat"
					label="Net Profit / Loss"
					labelPlacement="inside"
					placeholder={`$${change}`}
					className="dark text-foreground  max-w-xs ml-2.5 mr-5 mt-5 mb-5"
					// className="max-w-xs ml-2.5 mr-5 mt-5 mb-5 "
					style={{
						textAlign: 'center',
						color: 'white',
						padding: '40px',
						fontSize: '50px',
						marginTop: '15px',
						marginLeft: '5px',
						marginRight: '10px',
						marginBottom: '5px',
					}}
					/>
				</div>
				<div class="col md-2.5 mt-5">
					{/* ADD FOREX CURRENCY EXCHANGES HERE USING DROP DOWN MENU*/}
					<div>
						<Textarea
						variant="underlined" 
						permission="edit" 
						label="USD"
						placeholder="USD"
						className="dark text-foreground"
						value={valinr}
       					onValueChange={setValinr}
						/>
					</div>
					
					<div>
						<Textarea
						isDisabled
						variant="underlined" 
						label="INR"
						className="dark text-foreground"
						value = {83*parseInt(valinr)}
						/>
					</div>
				</div>
				{/* <div class="tradingview-widget-container">
					<div class="tradingview-widget-container__widget"></div>
					<div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
					<script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
					{{
						"symbol": "FX:EURUSD",
						"width": 350,
						"height": 220,
						"locale": "in",
						"dateRange": "12M",
						"colorTheme": "dark",
						"isTransparent": true,
						"autosize": false,
						"largeChartUrl": "",
						"chartOnly": false
					}}
					</script>
					</div> */}
			</div>

			<div >
				<div >
					<Table  className="dark text-foreground bg-background" striped bordered hover >
						<TableHeader>
							<TableColumn style={{ width: '5%' }}>
								<div>#</div>
							</TableColumn>
							<TableColumn style={{ width: '10%' }}>
								<div>Coin</div>
							</TableColumn>
							<TableColumn style={{ width: '10%' }}>
								<div>Handle</div>
							</TableColumn>
							<TableColumn style={{ width: '20%' }}>
								<div>Price</div>
							</TableColumn>
							<TableColumn style={{ width: '15%' }}>
								<div style={{ paddingLeft: '25px' }}>Buy</div>
							</TableColumn>
							<TableColumn style={{ width: '15%' }}>
								<div style={{ paddingLeft: '25px' }}>Sell</div>
							</TableColumn>
						</TableHeader>

						<TableBody>
							<TableRow>
								<TableCell textAlign="center">1</TableCell>
								<TableCell textAlign="center">Bitcoin</TableCell>
								<TableCell textAlign="center">BTC</TableCell>
								<TableCell textAlign="center" style={price_fluctuation1}>${parseInt(pricing1)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy1}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell1}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">2</TableCell>
								<TableCell textAlign="center">Ethereum</TableCell>
								<TableCell textAlign="center">ETH</TableCell>
								<TableCell textAlign="center" style={price_fluctuation2}>${parseInt(pricing2)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy2}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell2}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">3</TableCell>
								<TableCell textAlign="center">Binance Coin</TableCell>
								<TableCell textAlign="center">BNB</TableCell>
								<TableCell textAlign="center" style={price_fluctuation3}>${parseInt(pricing3)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy3}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell3}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">4</TableCell>
								<TableCell textAlign="center">Solana</TableCell>
								<TableCell textAlign="center">SOL</TableCell>
								<TableCell textAlign="center" style={price_fluctuation5}>${parseInt(pricing5)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy5}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell5}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">5</TableCell>
								<TableCell textAlign="center">Polkadot</TableCell>
								<TableCell textAlign="center">DOT</TableCell>
								<TableCell textAlign="center" style={price_fluctuation7}>${parseInt(pricing7)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy7}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell7}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">6</TableCell>
								<TableCell textAlign="center">Avalanche</TableCell>
								<TableCell textAlign="center">AVAX</TableCell>
								<TableCell textAlign="center" style={price_fluctuation9}>${parseInt(pricing9)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy9}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell9}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">7</TableCell>
								<TableCell textAlign="center">Chainlink</TableCell>
								<TableCell textAlign="center">LINK</TableCell>
								<TableCell textAlign="center" style={price_fluctuation10}>${parseInt(pricing10)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy10}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell10}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">8</TableCell>
								<TableCell textAlign="center">Litecoine</TableCell>
								<TableCell textAlign="center">LTC</TableCell>
								<TableCell textAlign="center" style={price_fluctuation11}>${parseInt(pricing11)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy11}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell11}>
									SELL
								</Button>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell textAlign="center">9</TableCell>
								<TableCell textAlign="center">Bitcoin Cash</TableCell>
								<TableCell textAlign="center">BCH</TableCell>
								<TableCell textAlign="center" style={price_fluctuation12}>${parseInt(pricing12)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy12}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell12}>
									SELL
								</Button>
								</TableCell>
							</TableRow>


							<TableRow>
								<TableCell textAlign="center">10</TableCell>
								<TableCell textAlign="center">Ethereum Classic</TableCell>
								<TableCell textAlign="center">ETC</TableCell>
								<TableCell textAlign="center" style={price_fluctuation14}>${parseInt(pricing14)}</TableCell>
								<TableCell textAlign="center">
								<Button color="success" variant="ghost" className="buy" onClick={popupBuy14}>
									BUY
								</Button>
								</TableCell>
								<TableCell textAlign="center">
								<Button color="danger" variant="ghost" className="sell" onClick={popupSell14}>
									SELL
								</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<Modal backdrop="blur" isOpen={showBuy1} onClose={popupBuy1} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="BTC" price={curr1} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell1} onClose={popupSell1} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="BTC" price={curr1} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy2} onClose={popupBuy2} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="ETH" price={curr2} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell2} onClose={popupSell2} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="ETH" price={curr2} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy3} onClose={popupBuy3} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="BNB" price={curr3} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell3} onClose={popupSell3} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="BNB" price={curr3} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy5} onClose={popupBuy5} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="SOL" price={curr5} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell5} onClose={popupSell5} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="SOL" price={curr5} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy7} onClose={popupBuy7} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="DOT" price={curr7} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell7} onClose={popupSell7} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="DOT" price={curr7} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy9} onClose={popupBuy9} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="AVAX" price={curr9} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell9} onClose={popupSell9} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="AVAX" price={curr9} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy10} onClose={popupBuy10} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="LINK" price={curr10} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell10} onClose={popupSell10} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="LINK" price={curr10} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy11} onClose={popupBuy11} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="LTC" price={curr11} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell11} onClose={popupSell11} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="LTC" price={curr11} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy12} onClose={popupBuy12} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="BCH" price={curr12} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell12} onClose={popupSell12} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="BCH" price={curr12} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>

					<Modal backdrop="blur" isOpen={showBuy14} onClose={popupBuy14} placement="center">
						<ModalContent>
							<ModalHeader>Buy</ModalHeader>
							<ModalBody>
							<Buy name="ETC" price={curr14} change={change} balance={balance} setChange={setChange} setBalance={setBalance} />
							</ModalBody>
						</ModalContent>
					</Modal>
					<Modal backdrop = {"blur"} isOpen={showSell14} onClose={popupSell14} placement="center">
						<ModalContent>
						<ModalHeader>Sell</ModalHeader>
						<ModalBody>
							<Sell name="ETC" price={curr14} change={change} balance={balance} setBalance={setBalance} setChange={setChange} />
						</ModalBody>
						</ModalContent>
					</Modal>
				</div>
			</div>
		</div>
		
	</div>
	);
};

export default Market;

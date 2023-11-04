import React, { useEffect, useState } from 'react';
import { basicAxios } from '../../api/customAxios';
import CustomNavbar from '../../components/customnavbar/CustomNavbar';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

const Transactions = () => {
    const [trans, setTrans] = useState([]);
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    useEffect(() => {
        const func = async () => {
        const res = await basicAxios.post("/trading/gettransaction/", {
            jwt_token: localStorage.getItem("jwt_token"),
        });
        const sortedTrans = res.data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
        setTrans(sortedTrans);
        };
        func();
    }, []);

    const pages = Math.ceil(trans.length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return trans.slice(start, end);
    }, [page, trans]);

    return (
        <div>
            <CustomNavbar isDashboard = {false} isStockWindow = {false} isTransaction = {true} />
            <div>
                <Table
                    aria-label = "Transaction table with client-side pagination"
                    bottomContent = {
                        <div className="flex w-full justify-center">
                            <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="secondary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                            />
                        </div>
                    }
                    classNames = {{
                        wrapper: "min-h-[222px]",
                    }}
                >
                    <TableHeader>
                    <TableColumn key="stock_name">Cryptocurrency</TableColumn>
                    <TableColumn key="buy_sell">Bought/Sold</TableColumn>
                    <TableColumn key="stock_quantity">Quantity</TableColumn>
                    <TableColumn key="stock_price">Price</TableColumn>
                    <TableColumn key="date_time">Time</TableColumn>
                    <TableColumn key="status">Status</TableColumn>
                    </TableHeader>
                    <TableBody items={items}>
                    {(item) => (
                        <TableRow key={item.date_time}>
                        {(columnKey) => (
                            <TableCell>{item[columnKey]}</TableCell>
                        )}
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
            
        </div>
    );
};

export default Transactions;

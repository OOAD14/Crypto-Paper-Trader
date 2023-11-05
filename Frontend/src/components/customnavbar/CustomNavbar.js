import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Logout from '../logout/Logout';

const CustomNavbar = ({isDashboard, isStockWindow, isTransaction}) => {

    return (
        <>
            <Navbar className="dark text-foreground bg-background">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Crypto Paper Trading Platform</p>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-16" justify="center">
                    <NavbarItem>
                        <Link href="/exchange" color={(isDashboard) ? "secondary" : "foreground"} aria-current={(isDashboard) ? "page" : "null"}>
                            Exchange
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/market" color={(isStockWindow) ? "secondary" : "foreground"} aria-current={(isStockWindow) ? "page" : "null"}>
                            Market
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/transactions" color={(isTransaction) ? "secondary" : "foreground"} aria-current={(isTransaction) ? "page" : "null"}>
                            Transaction History
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent as="div" justify="end">
                <Logout />
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
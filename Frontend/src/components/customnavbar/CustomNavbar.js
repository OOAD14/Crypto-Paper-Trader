import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Logout from '../logout/Logout';

const CustomNavbar = ({isDashboard, isStockWindow, isTransaction}) => {

    return (
        <>
            <Navbar>
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
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                <Logout />
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import ToggleMenuIcon from '@/assets/icons/toggle-menu.svg';
import { useState } from "react";
import { SideMenuList } from "./SideMenuList";
import { Content, Header, LogoContainer, SidebarContainer } from "./sidebarStyles";

export const Sidebar = () => {

	const [isShortMenu, setIsShortMenu] = useState(false);
	const [isHoverInShortMenu, setIsHoverInShortMenu] = useState(false);

	const toggleShortMenu = () => {
		const toggle = !isShortMenu;

		setIsShortMenu(toggle);
		if (!toggle) {
			setIsHoverInShortMenu(false);
		}
	}

	const handleMouseEnterInMenu = () => {
		if (isShortMenu) {
			setIsHoverInShortMenu(true);
		}
	}

	const handleMouseLeaveInMenu = () => {
		if (isShortMenu) {
			setIsHoverInShortMenu(false);
		}
	}

	return (
		<SidebarContainer
			isShortMenu={isShortMenu}
			isHoverInShortMenu={isHoverInShortMenu}
			onMouseLeave={handleMouseLeaveInMenu}
		>
			<Content>
				<Header className="sidebar-header" >
					<LogoContainer className="sidebar-logo-container">
						<Link to="/dashboard">LOGO</Link>
					</LogoContainer>
					<IconButton className="sidebar-toggle-button" onClick={toggleShortMenu} >
						<img src={ ToggleMenuIcon} alt="toggle-menu" />
					</IconButton>
				</Header>
				<Box component="div" onMouseEnter={handleMouseEnterInMenu}>
					<SideMenuList
						isShortMenu={isShortMenu}
						isHoverInShortMenu={isHoverInShortMenu}
					/>
				</Box>
			</Content>
		</SidebarContainer>
  )
}



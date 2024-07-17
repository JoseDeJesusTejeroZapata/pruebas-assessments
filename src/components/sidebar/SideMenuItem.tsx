import { type MenuItem as ModelMenuItem } from '@/models';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ChildrenMenuContainer, IconChildrenContainer, MenuItemStyled } from './sideMenuItemStyles';

interface SideMenuItemProps { 
  item: ModelMenuItem;
  isShortMenu: boolean;
  isHoverInShortMenu: boolean;
}

export const SideMenuItem = ({ item, isShortMenu, isHoverInShortMenu }: SideMenuItemProps) => { 
  
	const location = useLocation();
	const navigate = useNavigate();
	
	const [isOpenChildrenMenu, setIsOpenChildrenMenu] = useState(false);

	const handleNavigate = (path: string) => { 
	navigate(path);
	}
	
	const handleOpenChildrenMenu = () => { 
		setIsOpenChildrenMenu(!isOpenChildrenMenu);
	}

	return (
		<>
			<MenuItemStyled
				isActive={location.pathname === item.path}
				isShortMenu={isShortMenu}
				isHoverInShortMenu={isHoverInShortMenu}
				onClick={() => item.children ? handleOpenChildrenMenu() : handleNavigate(item.path)}
				>
				{/* URL ICON */}
				{typeof item.icon === 'string' ? (
					<Icon icon={item.icon} fontSize={24} />
				) : item.icon}

				{/* URL TITLE */}
				{ !isShortMenu || isHoverInShortMenu ? item.title : null}

				{/* IF HAS CHILDREN ROUTES */}
				{item.children ? (
					<>
						{/* CHEVRON ICON */}
						{!isShortMenu  || isHoverInShortMenu ? (
							<IconChildrenContainer isOpenChildrenMenu={isOpenChildrenMenu}>
								<div>
									<Icon icon="mdi:chevron-right" fontSize={24}/>
								</div>
							</IconChildrenContainer>
						) : null}
					</>
				) : null }
			</MenuItemStyled>

			{/* CHILDREN MENU */}
			{item.children ? (

				<ChildrenMenuContainer
					isOpenChildrenMenu={isShortMenu && !isHoverInShortMenu ? false : isOpenChildrenMenu}
					totalChildRoutes={item.children.length}
				>
					{item.children.map((child, index) => (
						<SideMenuItem
							key={`${child.path}_${index}`}
							isShortMenu={isShortMenu}
							isHoverInShortMenu={isHoverInShortMenu}
							item={child}
						/>
					))}
				</ChildrenMenuContainer>
			) : null }
		</>
	)
}


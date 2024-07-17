import { menuItems, } from '@/models';
import { MenuList } from "@mui/material";
import { SideMenuItem } from './SideMenuItem';


interface SideMenuListProps { 
  isShortMenu: boolean;
  isHoverInShortMenu: boolean;

}

export const SideMenuList = ({ isShortMenu, isHoverInShortMenu }: SideMenuListProps) => {


  return (
    <MenuList sx={{	
      display: 'flex',
      flexDirection: 'column',
      padding: '8px',
      gap: '12px',
    }}>
      {menuItems.map((item, index) => (
    
        <SideMenuItem
          key={`${item.path}_${index}`}
          isShortMenu={isShortMenu}
          isHoverInShortMenu={isHoverInShortMenu}
          item={item}
        />
      ))}
    </MenuList>
  )
}



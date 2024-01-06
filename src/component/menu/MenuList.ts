
interface MenuListType {
    id: number;
    title: string;
    href: string;
}

export const MenuList: MenuListType[] = [
    {id: 1, title: "Home", href:"home"},
    {id: 2, title: "About", href:"about"},
    {id: 3, title: "Tech Stack", href:"tech_stack"},
    {id: 4, title: "Projects", href:"project"},
    {id: 5, title: "Contact", href:"contact"}
]
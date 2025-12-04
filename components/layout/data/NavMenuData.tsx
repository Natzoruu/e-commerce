export interface menuItem {
    label : string;
    href : string;
    submenu? : menuItem[];
}

export const menuItems : menuItem[] = [
    {   
        label : "Laptop",
        href : "#",
    },
    {   
        label : "Desktop PCs",
        href : "#",
    },
    {   
        label : "Networking Devices",
        href : "#",
    },
    {   
        label : "Printers & Scanners",
        href : "#",
    },
    {   
        label : "PC Parts",
        href : "#",
    },
    {   
        label : "All Other Products",
        href : "#",
    },
    {   
        label : "Repairs",
        href : "#",
    },
    {   
        label : "Our Deals",
        href : "#",
    }
    ]
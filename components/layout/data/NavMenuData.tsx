export interface menuItem {
    label : string;
    href : string;
    submenu? : menuItem[];
}

export const menuItems : menuItem[] = [
    {   
        label : "Laptop",
        href : "#",
        submenu: [
            { label: "2-in-1 Convertibles - Premium", href: "#" },
            { label: "Creator Laptops", href: "#" },
            { label: "Gaming Laptops", href: "#" },
            { label: "Touchscreen Ultrabooks", href: "#" },
            { label: "Ultrabooks", href: "#" },
        ],
    },
    {   
        label : "Desktop PCs",
        href : "#",
        submenu: [
            { label: "Gaming Desktops - High End", href: "#" },
            { label: "Gaming Desktops - Mainstream", href: "#" },
            { label: "Gaming Desktops - Mid Tower", href: "#" },
        ],
    },
    {   
        label : "Networking Devices",
        href : "#",
        submenu: [
            { label: "Mesh WiFi Systems", href: "#" },
            { label: "WiFi Routers - Gaming", href: "#" }
        ]
    },
    {   
        label : "Printers & Scanners",
        href : "#",
        submenu: [
            { label: "Flatbed Scanners", href: "#" },
            { label: "Ink Tank Printers", href: "#" },
            { label: "Laser Printers", href: "#" }
        ]
    },
    {   
        label : "PC Parts",
        href : "#",
        submenu: [
            { label: "Graphics Cards (GPU)", href: "#" },
            { label: "Memory (RAM)", href: "#" },
            { label: "Processors (CPU)", href: "#" }
        ]
    },
    {   
        label : "Peripherals",
        href : "#",
        submenu: [
            { label: "Gaming Headsets", href: "#" },
            { label: "Gaming Keyboards", href: "#" },
            { label: "Gaming Mouse", href: "#" },
            { label: "Racing Controllers", href: "#" },
        ]
    },
    {   
        label : "All Products",
        href : "#",
    },
    {   
        label : "Our Deals",
        href : "#",
    }
    ]
interface FooterNavigation {
    label : string;
    url? : string;
    submenu? : FooterNavigation[];
}

export const FooterMenu : FooterNavigation [] = [
    {
        label : "Information",
        submenu : [
            {
                label: "About us",
                url : "#"
            },
            {
                label: "Contact us",
                url : "#"
            },
            {
                label: "Terms and conditions",
                url : "#"
            },
            {
                label: "Visit us",
                url : "#"
            },
        ]
    },
    {
        label : "Pc parts",
        submenu : [
            {
                label : "CPUS",
                url : "#"
            },
            {
                label : "Hard Drives",
                url : "#"
            },
            {
                label : "Graphic Cards",
                url : "#"
            },
            {
                label : "Peripherals",
                url : "#"
            },
            {
                label : "Cases / Power Supplies / Cooling",
                url : "#"
            },
            {
                label : "RAM",
                url : "#"
            },
            {
                label : "Motherboards",
                url : "#"
            },
        ]
    },
    {
        label: "Desktop PCs",
        submenu : [
            {
                label : "Custom PCs",
                url : ""
            },
            {
                label : "Servers",
                url : ""
            },
            {
                label : "All-In-One PCs",
                url : ""
            },
        ]
    },
    {
        label : "Laptops",
        submenu : [
            {
                label : "Everyday Use Notebooks",
                url : "",
            },
            {
                label : "Tablets and Pads",
                url : "",
            },
            {
                label : "Gaming Notebooks",
                url : "",
            },
        ]
    },
    {
        label : "Address",
        submenu : [
            {
                label : "Address: 1234 Street Adress City Address, 1234",
            },
            {
                label : "Phones: (00) 1234 5678",
            },
            {
                label : "We are open: Monday-Friday: 9:00 AM - 5:30 PM",
            },
            {
                label : "Friday: 1234 Street Adress City Address, 1234",
            },
            {
                label : "E-mail: shop@email.com",
            },
        ]
    }
]
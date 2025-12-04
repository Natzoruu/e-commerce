interface aboutData {
    bgColor? : "white" | "black" ,
    title? : string,
    text? : string,
    imgSrc? : string,
    icon? : string,
    direction ? : "normal" | "backwards" ,
}

export const aboutDataList : aboutData [] = [
    {
        bgColor : "black",
        title : "A Family That Keeps On Growing",
        text : "We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.<br/><br/>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.",
        imgSrc : "/images/About1.png",
        direction  : "normal",
    },
    {
        bgColor : "white",
        title : "Shop.com",
        text : "Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.",
        imgSrc : "/images/About2.png",
        direction  : "backwards",
    },
    {
        bgColor : "black",
        title : "Now You're In Safe Hands",
        text : "Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.<br/><br/>*Performance compared to i7-9700. Specs varies by model.",
        imgSrc : "/images/About3.png",
        direction  : "normal",
    },
    {
        bgColor : "white",
        title : "The Highest Quality of Products",
        text : "We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.",
        imgSrc : "/images/About4.png",
        direction  : "backwards",
    },
    {
        bgColor : "black",
        title : "We Deliver to Any Regions",
        text : "We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.",
        imgSrc : "/images/About5.png",
        direction  : "normal",
    },
]
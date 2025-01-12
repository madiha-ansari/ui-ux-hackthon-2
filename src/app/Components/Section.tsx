import React from 'react';
import Image from 'next/image';

const Section = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "579px",
                padding: "80px 50px",
                background: "#F1F0FF",
                display: "flex",
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
                gap: "40px", // Space between the two divs
            }}
        >
            {/* Image Section */}
            <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
                <Image
                    src="/img.png"
                    alt="Product Image"
                    width={590}
                    height={509}
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                />
            </div>

            {/* Text Content Section */}
            <div style={{ flex: "1", textAlign: "left", lineHeight: "1.6" }}>
                <h1
                    style={{
                        fontSize: "35px",
                        lineHeight: "46px",
                        letterSpacing: "1.5%",
                        fontWeight: "bold",
                        color: "#1A0B5B",
                        marginBottom: "20px",
                    }}
                >
                    Unique Features Of Latest & <br /> Trending Products
                </h1>

                {/* Feature List with Colored Bullets */}
                <ul style={{ paddingLeft: "20px", marginBottom: "20px", listStyle: "none" }}>
                    <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <span
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: "red",
                                borderRadius: "50%",
                                display: "inline-block",
                                fontWeight:"500",
                                marginRight: "10px",
                                color:"#ACABC3"
                            }}
                        ></span>
                        All frames constructed with hardwood solids and laminate
                    </li>
                    <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <span
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: "blue",
                                borderRadius: "50%",
                                display: "inline-block",
                                marginRight: "10px",
                                  color:"#ACABC3"
                            }}
                        ></span>
                        Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                        <span
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: "green",
                                borderRadius: "50%",
                                display: "inline-block",
                                marginRight: "10px",
                                  color:"#ACABC3"
                            }}
                        ></span>
                        Arms, backs, and seats are structurally reinforced
                    </li>
                </ul>

                {/* Add to Cart Section */}
                <div>
                    <button
                        style={{
                            background: "#FB2E86",
                            color: "white",
                            padding: "12px 25px",
                            borderRadius: "5px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginRight: "10px",
                            fontSize:'17px'
                        }}
                    >
                        Add To Cart
                    </button>
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#151875",
                        }}
                    >
                        B&B Italian Sofa 
            
                            </span>
            
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#FB2E86",
                            marginLeft: "10px",
                        }}
                    >
                 
                        $32.00
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Section;

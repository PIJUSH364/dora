"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card3d";
import Link from "next/link";

export function ThreeDCardDemo({ url }) {
    return (
        <CardContainer className="inter-var">
            <CardItem translateZ="100" className="w-2/3 mt-4">
                <img src={url} alt="dora_img" className="shadow-2xl h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
            </CardItem>
        </CardContainer>
    );
}

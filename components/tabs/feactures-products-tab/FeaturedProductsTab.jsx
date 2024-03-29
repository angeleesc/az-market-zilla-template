"use client"
import React, { useEffect, useState } from 'react'
import FeaturedNavTabBar from './FeaturedNavTabBar'
import "../tabs.scss"
import TabList from './TabList'
import "./feactured-product-tab.scss"
// Smartphone
// Computer
// Electronic
// TVAnsRadios
// Camera
// Accessoaries
// SmartWatches
// Headphones

const tabOptions = [
    "Smartphone",
    "Computer",
    "Electronic",
    "TV and Radio",
    "Camera",
    "Accsesories",
    "SmartWaces",
    "Headphone"
]

const tabList = {
    "Smartphone":[
        {
            itemName: "Galaxy s21",
            thumnails: "/images/smartphone1.jpg",
            value: 4.5,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 285.46

        },
        {
            itemName: "galaxy s22",
            thumnails: "/images/smartphone2.webp",
            value: 4,
            category: "Smarphones",
            itemAddedInCart: false,
            itemLiked: false,
            price: 1000.65
        },
        {
            itemName: "galaxy s23",
            thumnails: "/images/smartphone3.jpg",
            value: 3.5,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 1


        },
        {
            itemName: "galaxy s24",
            thumnails: "/images/smartphone4.jpg",
            value: 3,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 2.65


        },
        {
            itemName: "galaxy s25",
            thumnails: "/images/smartphone6.png",
            value: 2.5,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 32.36


        },
        {
            itemName: "galaxy s26",
            thumnails: "/images/smartphone6.png",
            value: 2,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 45.67


        },
        {
            itemName: "galaxy s27",
            thumnails: "/images/smartphone5.webp",
            value: 1.5,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 845.67,

        },
        {
            itemName: "galaxy s28",
            thumnails: "/images/smartphone6.png",
            value: 1,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price: 600.00


        },
        {
            itemName: "galaxy s29",
            thumnails: "/images/smartphone6.png",
            value: 0.5,
            itemAddedInCart: false,
            itemLiked: false,
            category: "Smarphones",
            price:340.67


        },
    ]
}
export default function FeaturedProductsTab() {

    const [currentFeaturedproductTab, setCurrentFeaturedproductTab] = useState("Smartphone")
    const [items, setItems] = useState(tabList["Smartphone"])



    useEffect(()=>{}, [currentFeaturedproductTab]);


    return (
        <secction className="mb-[20px]">
            <FeaturedNavTabBar
                currentTab={currentFeaturedproductTab}
                updateTab={setCurrentFeaturedproductTab}
                TabOptions={tabOptions}
            />
        <TabList items={items} />
        </secction>
    )
}

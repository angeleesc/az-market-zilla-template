"use client"
import React, { useState } from 'react'
import FeaturedNavTabBar from './FeaturedNavTabBar'
import "../tabs.scss"
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

export default function FeaturedProductsTab() {

    const [currentFeaturedproductTab, setCurrentFeaturedproductTab] = useState("Smartphone")


    return (
        <secction>
            <FeaturedNavTabBar
                currentTab={currentFeaturedproductTab}
                updateTab={setCurrentFeaturedproductTab}
                TabOptions={tabOptions}
            />

        </secction>
    )
}

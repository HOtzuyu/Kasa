import React from "react"

import Hero from "../../components/Hero"
import Dropdown from "../../components/DropDown"

import "../../utils/css/style.css"

import Image from "../../assets/headerBaniereApropos.jpg"

function APropos() {
    return (
        <div>
            <Hero bgPhoto={ Image } />
            <div className="about">
                <Dropdown
                title="Fiabilité"
                text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />

                <Dropdown
                title="Respect"
                text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />

                <Dropdown
                title="Service"
                text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />

                <Dropdown
                title="Sécurité"
                text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    )
}

export default APropos
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_VENDOR } from "../../GraphQL/Mutations";
import "./createvedor-styles.css";

export interface IVendor {
    id?: number,
    name: string,
    description: string,
    specialty: string,
    location: string,
}

function CreateVendor(): JSX.Element {
    const [vendor, setVendor] = useState<IVendor>({
        name: "",
        description: "",
        specialty: "",
        location: ""
    })

    const [createVendor, { error }] = useMutation(CREATE_VENDOR)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setVendor(prevVendor => ({
            ...prevVendor,
            [name]: value
        }));
    }

    return (
        <div className="register-container">
            <h1 className="register-title">Cadastrar Loja</h1>
            <div className="input-container">
                <input type="text" placeholder="Nome" name="name" onChange={(e) => handleInputChange(e)} />
                <input type="text" placeholder="Descrição" name="description" onChange={(e) => handleInputChange(e)} />
                <input type="text" placeholder="Especialidade" name="specialty" onChange={(e) => handleInputChange(e)} />
                <input type="text" placeholder="Localização" name="location" onChange={(e) => handleInputChange(e)} />
            </div>
            <button className="register-btn" onClick={() => { createVendor({ variables: { name: vendor.name, description: vendor.description, specialty: vendor.specialty, location: vendor.location } }) }}>
                Cadastrar
                <img src="./assets/accelerate.svg" alt="Rocket Logo" />
            </button>
        </div>
    )
}

export default CreateVendor;
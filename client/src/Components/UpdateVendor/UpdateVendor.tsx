import React, { useState } from "react";
import { UPDATE_VENDOR } from "../../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import "./updatevendor-styles.css";

interface INewVendor {
    newName: string;
    newDescription: string;
    newSpecialty: string;
    newLocation: string;
}

function UpdateVendor({ vendorId, setEditingItemId }: { vendorId: number | undefined, setEditingItemId: any }): JSX.Element {
    const [newVendor, setNewVendor] = useState<INewVendor>({
        newName: "",
        newDescription: "",
        newSpecialty: "",
        newLocation: ""
    })

    const { newName, newDescription, newSpecialty, newLocation } = newVendor;

    const [updateVendor, { error }] = useMutation(UPDATE_VENDOR);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewVendor(prevVendor => ({
            ...prevVendor,
            [name]: value
        }));
    }

    return (
        <div className="edit-container">
            <input type="text" placeholder="Nome" name="newName" onChange={(e) => handleInputChange(e)} />
            <input type="text" placeholder="Descrição" name="newDescription" onChange={(e) => handleInputChange(e)} />
            <input type="text" placeholder="Especialidade" name="newSpecialty" onChange={(e) => handleInputChange(e)} />
            <input type="text" placeholder="Localização" name="newLocation" onChange={(e) => handleInputChange(e)} />
            <div className="btns-container">
                <button className="ok-btn" onClick={() => updateVendor({ variables: { id: vendorId, name: newName, description: newDescription, specialty: newSpecialty, location: newLocation } })}>
                </button>
                <button className="cancel-btn" onClick={() => setEditingItemId(null)}></button>
            </div>
        </div>
    )
}

export default UpdateVendor;
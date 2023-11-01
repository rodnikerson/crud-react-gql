import React from "react";
import { IVendor } from "../CreateVendor/CreateVendor";
import "./vendorcard-styles.css"

interface IVendorCard {
    vendor: IVendor;
    deleteVendor: any;
    setEditingItemId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}

function VendorCard({ vendor, deleteVendor, setEditingItemId }: IVendorCard): JSX.Element {
    return (
        <div className="container">
            <h3>{vendor.name}</h3>
            <h4>{vendor.description}</h4>
            <h5>{vendor.specialty}</h5>
            <h6>{vendor.location}</h6>
            <div className="btns">
                <button className="edit-btn" onClick={() => setEditingItemId(vendor.id)}></button>
                <button className="del-btn" onClick={() => deleteVendor({ variables: { id: vendor.id } })}></button>
            </div>
        </div>
    )
}

export default VendorCard;
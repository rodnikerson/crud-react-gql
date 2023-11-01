import React, { useState } from "react";
import { GET_ALL_VENDORS } from "../../GraphQL/Queries";
import { DELETE_VENDOR } from "../../GraphQL/Mutations";
import { useQuery, useMutation } from "@apollo/client";
import { IVendor } from "../CreateVendor/CreateVendor";
import UpdateVendor from "../UpdateVendor/UpdateVendor";
import VendorCard from "../VendorCard/VendorCard";
import "./vendors-styles.css";

function Vendors(): JSX.Element {
    const { data, loading, error: getError } = useQuery(GET_ALL_VENDORS);
    const [deleteVendor] = useMutation(DELETE_VENDOR);

    const [editingItemId, setEditingItemId] = useState<number | null | undefined>(null);

    if (loading) return <h1>Carregando...</h1>;

    if (getError) return <h1>{getError.message}</h1>;

    return (
        <div className="content-container">
            <h2 className="stores-title">Lojas</h2>
            <div className="main-container">
                {data && data.getAllVendors.map((vendor: IVendor) => (
                    <div className="card-wrapper" key={vendor.id}>
                        {editingItemId === vendor.id ? (
                            <UpdateVendor vendorId={vendor.id} setEditingItemId={setEditingItemId} />
                        ) : (
                            <VendorCard vendor={vendor} deleteVendor={deleteVendor} setEditingItemId={setEditingItemId} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vendors;

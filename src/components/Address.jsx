import { useState } from "react";

export const Address = () => {
  const [address, setAddress] = useState([
    "Plot No. 007, Bhubaneswar, Odisha, Pincode-751007",
  ]);
  const [selectedAddress, setSelectedAddress] = useState(
    "Plot No. 007, Bhubaneswar, Odisha, Pincode-751007"
  );
  const [newAddress, setNewAddress] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const handleAddressAdd = () => {
    if (newAddress.length === 0) {
      setNewAddress("can not be empty");
    } else {
      setAddress((prev) => [...prev, newAddress]);
      setIsAdd(false);
    }
  };
  return (
    <>
      {!isAdd && (
        <div>
          {isSelect ? (
            <div>
              <label htmlFor="address-selector">Select Address :</label>
              <select
                onChange={(e) => setSelectedAddress(e.target.value)}
                id="address-selector"
              >
                {address.map((addr) => {
                  return (
                    <option value={addr} key={addr}>
                      {addr}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <div>
              <p style={{marginBottom:"0px"}}>Address for Checkout :</p>
              <p style={{marginTop:"0px"}}>{selectedAddress}</p>
            </div>
          )}
          <button onClick={() => setIsSelect((prev) => !prev)} style={{marginTop:"5px"}}>
            {isSelect ? "Go Back" : "Select an Address"}
          </button>
        </div>
      )}
      {!isSelect && !isAdd && (
        <button onClick={() => setIsAdd(true)} style={{margin: "5px 0px"}}>Add an Address</button>
      )}
      {isAdd && (
        <div>
          <input type="text" onChange={(e) => setNewAddress(e.target.value)} value={newAddress}/>
          <button onClick={() => handleAddressAdd()} style={{margin : "5px 0px"}}>Add the Address</button>
        </div>
      )}
    </>
  );
};

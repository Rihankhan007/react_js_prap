import  { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showotpInput, setshowotpInput] = useState(false);
 
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  
  const handlePhoneSubimt = (event) => {
    event.preventDefault();
    //phone validations
  
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // Call Be API
    //show otp
    setshowotpInput(true);
  };

  const onOtpSubmit = (otp)=>{
console.log("Loing successFull")
  }
  return (
    <div>
      {!showotpInput ? (
        <form onSubmit={handlePhoneSubimt}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone NUmber"
          />
          <button type="submit">submit</button>
        </form>
      ) : (
        <div className="senttext">
          <p>Enter OTP sent {phoneNumber}</p>
                
           <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;

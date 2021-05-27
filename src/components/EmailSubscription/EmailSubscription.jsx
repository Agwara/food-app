import React, {useState} from "react";

import "./EmailSubscription.css"

const EmailSubscription = () => {
  const [email, setEmail] = useState("")



  return (
    <form className="email-subscription">
      <input
        className="email-subscription__input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        required
      />

      <button className="email-subscription__btn">
        Subscribe
      </button>
    </form>
  )
}

export default EmailSubscription;

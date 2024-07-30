import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6d0873c3-250c-4d2b-a155-4b26ae7d0bda");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            <span></span>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to contact me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <span>icon</span>
                        <p>kavetech@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <span>icon</span>
                        <p>+254 798566564</p>
                    </div>
                    <div className="contact-detail">
                        <span>icon</span>
                        <p>CA, United States</p>
                    </div>
                </div>
                
            </div>
                <form onSubmit={onSubmit} className='contact-right' action="">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name="email" />
                    <label htmlFor="">Write your Message Here:</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button className="contact-submit" type="submit">Submit</button>
                    <span>{result}</span>
                </form>
        </div>
    </div>
  )
}

export default Contact
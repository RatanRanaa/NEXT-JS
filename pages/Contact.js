import React, {useState} from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(phone, name, email, desc)
    // let data = {phone, name, email, desc}

    // fetch('http://localhost:3000/api/postcontact', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.text())
    // .then(data => {
    //   console.log('Success:', data)
    // })
    // .catch((error)=> {
    //   console.error("Error:", error)
    // })
  }
  
  const handleChange= (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value)
    }
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    if (e.target.name == "desc") {
      setDesc(e.target.value)
    }
    if (e.target.name == "name") {
      setName(e.target.value)
    }
  }
  

  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>Enter Your Name</label>
            <input type="name" value={name}  onChange={handleChange} className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>Email address</label>
            <input type="email" value={email} onChange={handleChange}  className="form-control" id="email" name='email' aria-describedby="emailHelp"/>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>Phone Number</label>
            <input type="phone" value={phone} onChange={handleChange}  className="form-control" id="phone" name='phone' aria-describedby="emailHelp"/>
          </div>
          {/* <div className={styles.mb3}>
            <label htmlFor="exampleInputPassword1" className={styles.formlabel}>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div> */}
          <div className={styles.mb3}>
            <label htmlFor="desc">Comments</label>
            <textarea value={desc} onChange={handleChange} className="form-control" placeholder="Leave a comment here" name='desc' id="desc"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact
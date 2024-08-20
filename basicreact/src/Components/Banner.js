import React from 'react'
import './CSS/homebanner.css'

const Banner = () => {
  return (
    <section class="homebanner-sec">
    <div class="container homebanner">
        
        
            <div class="col-6 homebanner-content">
                <h6>FOR MILLIONS OF USERS</h6>
                <h1>Powerful Digital <br/>IT solutions Company</h1>
                <p>Afford planned account law instead. Heard new week even yet <br/>that. Incommode delightful so resolving son themselves do in listening.</p>
            
                <a href="#" target="_blank">
                    <img src="images/getstartedbutton.png" target="blank" width="190" height="51.19px" />
                </a>
            </div>
            
            
            <div class="col-6 contact-form">
                <h2>INFO FORM</h2>
                <p>Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry. Contrary to popular belief</p>
                <form action="#">
                    <input type="text" name="name" required placeholder="Name"/> 
                    <input type="email" name="email" required placeholder="Email"/>
                    <div class="select_box">
                    <select>
                        <option>Services</option>
                        <option>test 2</option>
                        <option>test 3</option>
                        <option>test 4</option>
                    </select>
                    </div>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
    
    </div>
    </section>
  )
}

export default Banner

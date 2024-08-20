import React from 'react'
import './CSS/portfolioandcontact.css'
const Portfolioandcontact = () => {
  return (
    <section class="portfolioandcontact">
<div class="container portfolio">
  
<div class="content">
    <h3>Portfolio</h3>
    <div><h1>Actionable insights.<br/> Real-world experience.</h1></div>
    <div><img src="images/horline.png" height="2px" width="50px"/></div>
   <div><p>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p></div>

</div>

<div class="row r1">
    <div class="col-4 logodesigning">
        <img class="picturehei" src="images/logodesigning.png" width="354px" height="350px"/>
        <div ><a href="#" target="blank" class="buttonhei" >Logo Designing</a></div>

 
    </div>

    <div class="col-4 appdevelopment">
        <img class="picturehei" src="images/appdevelopment.png" width="354px" height="350px"/>
        <div ><a href="#" target="blank" class="buttonhei" >App Development</a></div>
       
    </div>

    <div class="col-4 webdesigning">
        <img class="picturehei" src="images/webdesigning.png" width="354px" height="350px"/>
        <div ><a href="#" target="blank"  class="buttonhei" >Web Designing</a></div>
       
    </div>
</div>

<div class="row r2">

    <div class="col-4 logodesigning">
        <img class="picturehei" src="images/logodesigning.png" width="354px" height="350px"/>
        <div><a href="#" target="blank" class="buttonhei" >Logo Designing</a></div>
 
    </div>

    <div class="col-4 appdevelopment">
        <img class="picturehei" src="images/appdevelopment.png" width="354px" height="350px"/>
        <div ><a href="#" target="blank" class="buttonhei" >App Development</a></div>
       
    </div>

    <div class="col-4 webdesigning">
        <img class="picturehei" src="images/webdesigning.png" width="354px" height="350px"/>
        <div ><a href="#" target="blank" class="buttonhei" >Web Designing</a></div>
       
    </div>
</div>
<div class="row rowbutton">
<div><a href="#" target="blank" class="viewall">VIEW ALL</a></div>
</div>
</div>


<div class="container contactus">
    <div class="row contactusss">

        <div class="col-6 sec1">
        <div class="contact-content bg">
         <div>   <h6>Contact us</h6></div>
            <div><h1>You can connect with us<br/> when need help!</h1></div>
<div class="row loeinfo" >
            <div class="loeimages">
                <ul>
                    <li><a href="#" target="blank"><img src="images/location.png" target="blank" width="70px" height="70px" /></a></li>
                   
                        <li><a href="#" target="blank"><img src="images/phone.png" target="blank" width="70px" height="70px" /></a></li>
            
                    <li> <a href="#" target="blank"><img src="images/email.png" target="blank" width="70px" height="70px" /></a></li>
                    
                </ul>
            
                
            </div>
            <div class="loetext">
                <ul>
                    <li ><h1>Office Location</h1><p>22 Baker Street, London,<br/>United Kingdom, W1U 3BW</p></li>
                   
                        <li ><h1>Phone</h1><p>+44-20-7328-4499</p></li>
            
                    <li><h1>Email</h1><p>info@yourdomain.com</p></li>
                    
                </ul>
            
                
            </div>
        </div>    
        </div>
        </div>
		
        <div class="col-6 sec2">
        <div class="contactus-form">
            <h2>INFO FORM</h2>
            <p>Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry. Contrary to popular belief</p>
            <form action="#">
                <input type="text" name="name" required placeholder="Name"/>
                <input type="email" name="email" required placeholder="Email"/>
                <select>
					<option>Services</option>
					<option>test 2</option>
					<option>test 3</option>
					<option>test 4</option>
				</select>
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    </div>
	
</div>
</section>
  )
}

export default Portfolioandcontact
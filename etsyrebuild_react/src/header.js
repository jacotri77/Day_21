import React from 'react'

export default React.createClass({

render(){
	return(
    <div>
		<header className="bignav">
      <div className="headerdiv">
      <div className="leftnav">
        <a href="#"><img src="images/etsy-vector-logo.png" alt='#'/></a>
    		<input type="text" id="search" placeholder="whiskey" />
        <button href="#">Search</button>
      </div>
      <div className="rightnav">
        <h4><a href="#">Sell on Etsy</a></h4>
        <h4><a href="#">Register</a></h4>
        <button id="signIns" href="#">Sign In</button>
     
      <div className="cart">
        <img src="images/cart.png" alt='#' />
        <h4>Cart</h4>
      </div>  
      </div> 
      </div> 
  	</header>
   
  	<nav id="smallnav">
 
      <div id="shenanigans">
  			<ul>
          <li><a href="#">Clothing & Accessories</a></li>
          <li><a href="#">Jewelry</a></li>
          <li><a href="#">Craft Supplies & Tools</a></li>
          <li><a href="#">Weddings</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Home & Living</a></li>
          <li><a href="#">Kids & Baby</a></li>
          <li><a href="#">Vintage</a></li>   
        </ul>
      </div>
    
  	</nav>
  </div>


  	)
	}
})
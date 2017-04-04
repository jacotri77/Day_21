import React from 'react'
import Shipping from './shipping'

export default React.createClass({

render(){
	return(
		<div id="wholepage">
    		<main id="container">
      	<span>Top categories for "whiskey"</span>
    		<section className="section1">
          <div className="smaller">
            <img  className="smallImg" src="http://placehold.it/275x200" alt='#'/>
            <div id="imgText">
              <h4 className="imgTitle">this is a long title to make sure it fits</h4>
                <p id="maker">manufacturer</p>
                <p id="pricing">price $2.00</p>
            </div>
          </div>
          <div className="smaller">
            <img  className="smallImg" src="http://placehold.it/275x200" alt='#'/>
            <div id="imgText">
              <h4 className="imgTitle">this is a long title to make sure it fits</h4>
                <p id="maker">manufacturer</p>
                <p id="pricing">price $2.00</p>
            </div>
          </div>
          
        </section>
    	</main>
    		<div className="leftmenu">
          <ul className="categories">
            <h4 className="lefth">All Categories</h4>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Art & Collectables</a></li>
            <li><a href="#">Weddings</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Paper & Party Supplies</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Craft Supplies & Tools</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Bags & Purses</a></li>
            <li><a href="#">Bath & Beauty</a></li>
            <li><a href="#">Books, Movies & Music</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Electronics & Accessories</a></li>
            <li><a href="#">Toys & Games</a></li>
            <li><a href="#">Pet Supplies</a></li>
          </ul>
    			<ul className="shopany"><h4 className="lefth">Shop Anywhere</h4>
            <li><input type="radio" name="shopanywhere" value="Anywhere" /><a href="#">Anywhere</a></li>
            <li><input type="radio" name="shopanywhere" value="United States" /><a href="#">United States</a></li>
            <li><a href="#">Choose a custom location</a></li>
          </ul>
          <ul className="itemty"><h4 className="lefth">Item Type</h4>
            <li><input type="radio" name="itemtype" value="All Items" /><a href="#">All Items</a></li>
            <li><input type="radio" name="itemtype" value="Handmade" /><a href="#">Handmade</a></li>
            <li><input type="radio" name="itemtype" value="Vintage" /><a href="#">Vintage</a></li>
          </ul>
          <div className="priceitem">
            <ul><h4 className="lefth">Price ($)</h4>
              <li><input type="radio" name="price" value="Any price" /><em><a href="#">Any price</a></em></li>
              <li><input type="radio" name="price" value="Under $25" /><a href="#">Under $25</a></li>
              <li><input type="radio" name="price" value="$25 to $50" /><a href="#">$25 to $50</a></li>
              <li><input type="radio" name="price" value="$50 to $100" /><a href="#">$50 to $100</a></li>
              <li><input type="radio" name="price" value="Over $100" /><a href="#">Over $100</a></li>
            </ul>
            <span id="highlow">
              <input type="text" id="low" placeholder="Low" /> to <input type="text" id="high" placeholder="high" />
              <button type="arrow"></button>
            </span>
           </div>
           <div className="colored">
              <h4 className="lefth">Filter by color</h4>
              <div className="colors">
                <form action="#">
                  <input id="red" type="submit"/>
                </form>
                <form action="#">
                  <input id="orange" type="submit"/>
                </form>
                <form action="#">
                  <input id="yellow" type="submit"/>
                </form>
                <form action="#">
                  <input id="green" type="submit"/>
                </form>
                <form action="#">
                  <input id="teal" type="submit"/>
                </form>
                <form action="#">
                  <input id="violet" type="submit"/>
                </form>
                <form action="#">
                  <input id="black" type="submit"/>
                </form>
                <form action="#">
                  <input id="white" type="submit"/>
                </form> 
              </div>
            </div>
    		  <ul className="ordering">
            <h4 className="lefth">Ordering Options</h4>
            <li><input type="checkbox" name="ordering" value="gift cards" />Accepts Etsy gift cards</li>
            <li><input type="checkbox" name="ordering" value="customizable" />Customizable</li>
          </ul>
          <Shipping />
          <section className="section2">
          <h4>Related to whiskey</h4>
          <ul>
            <li><a href="#">whiskey barrel</a></li>
            <li><a href="#">whiskey decanter</a></li>     
            <li><a href="#">whiskey stones</a></li>
          </ul>
          <ul>
            <li><a href="#">bourbon</a></li>
            <li><a href="#">jack daniels</a></li>
            <li><a href="#">gifts for him</a></li>
          </ul>
          <ul>
            <li><a href="#">beer</a></li>
            <li><a href="#">boyfriend gift</a></li>
            <li><a href="#">flask</a></li>
          </ul>
          <p>Looking for shops? <a href="#" className="underlined">WhiskeyDogWares</a>, <a href="#" className="underlined">whiskeynweddingbells</a>, <a href="#" className="underlined">WHISKEYSWHIMS</a>. <a href="#">See more</a>.</p>
          <div className="contactus">
          <p>Get top trends and fresh editors' picks in your inbox with Etsy Finds.</p>
          <input type="email" id="emailer" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        </section>
     </div>
    </div>

 	)
	}
})
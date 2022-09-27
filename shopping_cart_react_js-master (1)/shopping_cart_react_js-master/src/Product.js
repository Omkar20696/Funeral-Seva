
import { useEffect, useState } from 'react';
import './App.css';
import Menu from './Menu';
import {httpPost,httpPostwithToken} from './HttpConfig';

export default function Product() {
    return (
        <div class="single">
		<div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/flower1.jpg">
							<div class="thumb-image"> <img src="../assets/images/flower1.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li><br></br>
						<li data-thumb="images/wood.jpg">
							<div class="thumb-image"> <img src="../assets/images/wood.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li><br></br><br></br><br></br>
						<li data-thumb="images/pot.jpg">
							<div class="thumb-image"> <img src="../assets/images/pot.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li><br></br><br></br>
						<li data-thumb="images/pandit.jpg">
							<div class="thumb-image"> <img src="../assets/images/pandit.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li><br></br>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>variety of flower</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Description</i></h5>
					<p>Today flowers are used at funerals as a visual expression of our sympathy, grief, love and respect to the deceased,
						 but this was not always the case. In early times, fragrant funeral flowers were placed on and around the casket of the deceased to perfume the area and ward off the smell of the decaying body..</p>
				</div>
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">RS.450</i></p>  
				<button type="submit" class="w3ls-cart">Add to cart</button>
				</div> 
			</div>

			<div class="col-md-8 single-right"><br></br><br></br>
			<h3>Types Of Woods</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Description</i></h5>
					<p>Use wood for making strips for the bier, as well as for placing the pot containing fire.
					For preparing a bier, cut two pieces of wood approximately 6 feet in length and place them horizontally on the ground. Keeping a space of one & a half feet between them, tie the wood to them leaving equal space

</p>
				</div>
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">RS.500</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Add to cart</button>
				
				</div> 
                </div>

				<div class="col-md-8 single-right"><br></br>
				<h3>Use of pot</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Description</i></h5>
					<p>arrying water pot during cremation is a must for many Hindu communities and this has a deep symbolism. The person designated to light the pyre goes around the pyre of the dead person with water pot on his shoulders. A hole is made in the water pot so that the water flows out and falls around the funeral pyre.
						Finally, the water pot is dropped hardly backwards and it breaks.</p>
				</div>
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">RS.250</i></p>  
				<button type="submit" class="w3ls-cart">Add to cart</button>
				</div> 
			</div>

			<div class="col-md-8 single-right"><br></br>
				<h3>Pandit</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Description</i></h5>
					<p>On the death of a person (sometimes at the approach of death) Pandit or Pantulu is summoned, mantras from the sacred texts are recited, and ceremonial gifts are prepared. 
						The dead body is moved as soon as possible to the cremation grounds.</p>
				</div>
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">RS.4500</i></p>  
				<button type="submit" class="w3ls-cart">Add to cart</button>
				</div> 
			</div>
    </div>
	</div>
				
    )
}
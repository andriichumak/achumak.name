/**
 * Created by andy on 12-Jul-16.
 */
import React, { Component } from 'react';

export default class Experience extends Component {
	render() {
		return <div className="page experience">
			<div className="ui styled fluid accordion">
				<div className="active title">
					<i className="dropdown icon"/>
					What is a dog?
				</div>
				<div className="active content">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</div>
				<div className="title">
					<i className="dropdown icon"/>
					What kinds of dogs are there?
				</div>
				<div className="content">
					<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
				</div>
				<div className="title">
					<i className="dropdown icon"/>
					How do you acquire a dog?
				</div>
				<div className="content">
					<p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
					<p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
				</div>
			</div>
		</div>
	}
}

import React, { Component } from 'react';
import Card from '@bit/nexxtway.react-rainbow.card';

class ItemCard3 extends Component{
    constructor(props){
		super(props);
		// console.log(this.props)
    }

    render(){
        return (
            <Card>
                <img
                    src={"/uploads/"+this.props.img}
                    className="rainbow-p-vertical_x-large rainbow-m_auto rainbow-align-content_center"
                    alt="landscape with rainbows, birds and colorful balloons" style={{ height: 200 }}/>
                <div style={{textAlign:"center", fontSize:20}}>{this.props.title}</div>
            </Card>
        )
        
    }
}

export default ItemCard3
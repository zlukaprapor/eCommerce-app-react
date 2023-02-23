import React, {Component} from "react";

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img alt={'image'+this.props.item.id} src={'./img/'+this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}Грн</b>
                <div className='add-to-cart'>+</div>
            </div>
        )
    }

}
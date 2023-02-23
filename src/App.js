import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Items} from "./components/Items";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'SAMSUNG Galaxy S2',
                    img:'Samsung.webp',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
                    category: 'mobil',
                    price: '36 244.99',

                },
                {
                    id: 2,
                    title: 'APPLE iPhone 11',
                    img: 'apple.webp',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
                    category: 'mobil',
                    price: '22 499',

                },
                {
                    id: 3,
                    title: 'XIAOMI Redmi 9A',
                    img :'xiaomi.webp',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
                    category: 'mobil',
                    price: '3999.99',

                },
                {
                    id: 4,
                    title: 'REALME Narzo 50A',
                    img: 'narzo.webp',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
                    category: 'mobil',
                    price: '6 244.99',

                },
                {
                    id: 5,
                    title: 'OPPO A57s',
                    img: 'oppo.webp',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
                    category: 'mobil',
                    price: '7 500.99',

                },
                {
                    id: 6,
                    title: 'VIVO Y33s',
                    img: 'img_0_60_8389_3_1.webp',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
                    category: 'mobil',
                    price: '3 100.99',

                },
            ]
        }
    }
    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <Items items={this.state.items}/>
                <Footer/>
            </div>
        )
    }
}

export default App;

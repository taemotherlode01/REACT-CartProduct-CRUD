import React,{ Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {date : new Date()};
        //setInterval(() => this.tick(),1000);
        //console.log('constructor')
    }

    componentDidMount() {
        //console.log('componentDidMount')
        this.timeID = setInterval(() => this.tick(),1000);
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        //console.log('componentWillUmount')
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({date : new Date()});
    }

    render() {
        return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 text-left">
                    <h1 className="text-success"><img style={{height : 78, marginTop : 20}} src = "/images/logo/logo.png" alt ="" />KU CAFE  </h1>
                </div>
                <div className="col-md-4 text-right">
                <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()} </h5> 

                <ul className="list-inline">
                    <li className="list-inline-item title"> <Link className="text-success" to="/">หน้าหลัก</Link></li>
                    <li className="list-inline-item title">|</li>
                    <li className="list-inline-item title"><Link className="text-success" to="/orders">รายการสั่งซื้อ</Link></li>
                    <li className="list-inline-item title">|</li>
                    <li className="list-inline-item title"><Link className="text-success" to="/products">สินค้า</Link></li>
                    <li className="list-inline-item title">|</li>
                    <li className="list-inline-item title"><Link className="text-success" to="/about">เกี่ยวกับ</Link></li>
                </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Header; 
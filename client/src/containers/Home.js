import React,{Component} from 'react';
import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import { productsFetch } from '../actions';

class Home extends Component {

   constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.productsFetch();
    }
  render(){
  return (
    <div>
      
      <Header/>
      {this.props.products && Array.isArray(this.props.products) &&
      <Monitor products = {this.props.products}/>
  }
      <Footer  Company = "Ku" email = "thanayut.ko@ku.th" />
    </div>
  );
}
}
function mapSteteToProps(state) {
  return{products : state.products};

}
export default connect(mapSteteToProps,{productsFetch}) (Home);
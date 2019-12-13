import React from 'react'

class FoodItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            itemCount : this.props.count,
        }
        this.order = {
            id:this.props.id,
            count:this.props.count
        }
        this.amount=this.props.amount
    }

    
    increment = () =>{
        
        this.setState({
            itemCount:this.state.itemCount+1
        })
        this.order.count = this.state.itemCount+1
        this.props.onCountChange(this.order)
        this.props.onAmountChange(this.amount + this.props.price)
      }
    
    decrement = () =>{
        
        this.setState({
            itemCount:this.state.itemCount-1
        }) 
        this.order.count = this.state.itemCount-1
        this.props.onCountChange(this.order)
        this.props.onAmountChange(this.amount - this.props.price)
      }


    render(){
        return(
                <li className="list-group-item">
                    <div className='row'>
                    <div className='col-10'>
                      {this.props.menuId}. {this.props.name}
                    <br/>
                    <small className='pricetag'>price:{this.props.price} Rs.</small>
                    </div>
                    <div className='col-2'>
                    <div className='d-flex counter'>
                        <div onClick={()=>this.decrement()}>-</div>
                        <div>{this.state.itemCount}</div>
                        <div onClick={()=>this.increment()}>+</div>
                    </div>
                    </div>
                    </div>
                </li>
        )
    }
}

export default FoodItem
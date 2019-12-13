import React from 'react'

class FoodCost extends React.Component{
    constructor(props){
        super(props)
        this.itemTotal = this.props.items * this.props.price;
    }

    render(){
        return(
                <li className="list-group-item"> 
                    <div className='row'>
                        <div className='col-8'>
                        {this.props.menuNo}. {this.props.name}
                        <br/>
                        <small className='text-secondary'>X{this.props.items}</small>
                        </div>
                        <div className='col-4'>
                            Rs.
                            {this.props.items * this.props.price}
                        </div>
                    </div>
                </li>      
        )
    }
}

export default FoodCost
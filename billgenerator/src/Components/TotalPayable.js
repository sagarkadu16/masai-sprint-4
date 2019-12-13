import React from 'react'

class TotalPayable extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
                    <div className='row'>
                        <div className='col-8'>TotalPayable</div>
                        <div className='col-4'>Rs. {this.props.amount}</div>
                    </div>
        )
    }
}

export default TotalPayable
import React from 'react'

class Tax extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
                    <div className='row'>
                        <div className='col-8'>Tax:</div>
                        <div className='col-4'>- {this.props.tax}</div>
                    </div>
        )
    }
}

export default Tax
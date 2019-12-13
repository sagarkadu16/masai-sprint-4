import React from 'react'
import './App.css'
import FoodItem from './Components/FoodItems'
import FoodCost from './Components/Cost/FoodCost'
import TotalPayable from './Components/TotalPayable'
import Tax from './Components/Tax'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      taxedAmount:0,
      tax:0 ,
      totalAmount:0,
      bhurji:0,
      chickenBiryani:0,
      shahiTukda:0,
      kajuMasala:0
    }
  }


  handleAmount = (input) =>{
    this.setState({
      totalAmount:this.state.totalAmount + input
    })
  }

  handleTaxChange = (e) =>{
      this.setState({
        tax:e.target.value
      })
      console.log(this.state.tax) 
  }

  handleTax = () =>{
    console.log('check')
    this.setState({
      taxedAmount:(this.state.totalAmount - (this.state.tax/100)*this.state.totalAmount)
    })
  }

  handleCount = (order) =>{

    switch (order.id){
      case 'bhurji':
          this.setState({
            bhurji:order.count})
            break;
      case 'chickenBiryani':
          this.setState({
            chickenBiryani:order.count
          })
          break;
      case 'shahiTukda':
          this.setState({
            shahiTukda:order.count
          })
          break;
      case 'kajuMasala':
          this.setState({
            kajuMasala  :order.count
          })
          break;
      default :
          console.log(order.id) 
          break;
      }
  }

  render(){
    return(
              <div>
                <div className='font-weight-bold heading'>Bill Generator</div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-4'>
                        <ul className="list-group list-group-flush"> 
                            
                          <FoodItem amount={this.state.totalAmount} onAmountChange={this.handleAmount} menuId={1} name='Paneer-Bhurji' id='bhurji' price={75} count={0} onCountChange={this.handleCount} />                         
                          <FoodItem amount={this.state.totalAmount} onAmountChange={this.handleAmount} menuId={2} name='Chicken-Biryani' id='chickenBiryani' price={110} count={0} onCountChange={this.handleCount} />                         
                          <FoodItem amount={this.state.totalAmount} onAmountChange={this.handleAmount} menuId={3} name='Shahi-Tukda' id='shahiTukda' price={150} count={0} onCountChange={this.handleCount} />  
                          <FoodItem amount={this.state.totalAmount} onAmountChange={this.handleAmount} menuId={4} name='Kaju-Masala' id='kajuMasala' price={140} count={0} onCountChange={this.handleCount} />                    
                        
                        </ul> 
                    </div>
                    <div className='col-2'>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-header">
                          Price Details
                        </div>
                        <ul className="list-group list-group-flush">

                            <FoodCost  menuNo={1} name={'Paneer-Bhurji'} items={this.state.bhurji}  price={75} />
                            <FoodCost  menuNo={2} name={'Chicken-Biryani'} items={this.state.chickenBiryani} price={110}/>
                            <FoodCost  menuNo={3} name={'Shahi-Tukda'} items={this.state.shahiTukda} price={150}/>
                            <FoodCost  menuNo={4} name={'Kaju-Masala'} items={this.state.kajuMasala} price={140}/>
                          
                          <div className="card-footer">
                              <Tax tax={this.state.taxedAmount}/>
                              <TotalPayable amount={this.state.totalAmount}/>
                          </div>
                        </ul>
                      </div>
                    </div>
                    <div className='col-3'>
                          <div className="input-group mb-3 mt-5">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">Tax:</span>
                            </div>
                            <input type="text" className="form-control" value={this.state.tax} onChange={this.handleTaxChange} placeholder="Enter tax %" aria-label="Username" aria-describedby="basic-addon1" />
                            <div className="input-group-append">
                               <button className="btn btn-outline-success" onClick={this.handleTax} type="button" id="button-addon2">Apply</button> 
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
    )
  }

}


export default App
import React, { Component } from 'react';

class BillForm extends Component {
    constructor() {
        super();
        var today = new Date(),
            billdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.state = {
            billnum: 101,
            billdate: billdate,
            coustname: '',
            item: '',
            code: '',
            price: '',
            qty: '',
            itemlist: [],
            total:''

        }
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addItem = (e) => {
        e.preventDefault();
        const lists = {
            billnum: this.state.billnum,
            coustname: this.state.coustname,
            item: this.state.item,
            code: this.state.code,
            price: this.state.price,
            qty: this.state.qty,
            
        }
        
        
        this.setState({
            itemlist: [...this.state.itemlist, lists],
                      
        })
        console.log(this.state.itemlist,'items')
    }     
    
    render() {
        

       return (
            <div>
                <h1 className='App'>Bill Payment Page</h1><br /><br />
                <form>
                    <table>
                        <tr><td><label>Bill No. </label></td>
                            <td> <input type='text' name='billnum' value={this.state.billnum} onChange={this.onHandleChange} /></td><td><label>Bill Date </label></td>
                            <td> <input type='text' name='billdate' value={this.state.billdate} /></td></tr>
                        <tr><td><label>CoustomerName </label></td>
                            <td> <input type='text' name='coustname' value={this.state.coustname} onChange={this.onHandleChange} /></td><td></td></tr>
                    </table>
                    <table><tr><td style={{ paddingLeft: '155px' }}>&nbsp;</td>
                        <td><input type='text' name='item' value={this.state.item} onChange={this.onHandleChange} /></td>
                        <td><input type='text' className='datwidth' name='code' value={this.state.code} onChange={this.onHandleChange} /></td>
                        <td><input type='text' className='datwidth' name='price' value={this.state.price} onChange={this.onHandleChange} /></td>
                        <td><input type='text' className='datwidth' name='qty' value={this.state.qty} onChange={this.onHandleChange} /></td>
                        <td><button className='datwidth' onClick={this.addItem}>Add</button></td></tr></table>
                    <br /><br />
                    <table style={{ marginLeft: '10%' }} >
                        <tr className='trclass'>
                            <th>SI no.</th><th className='thlong'>Item</th><th>Code</th><th>Price</th><th>Quantity</th><th>Amount</th>
                        </tr>

                        {
                            this.state.itemlist.map((data, i) =>
                                <tr className='trclass'><td className='tdlong'>{i + 1}</td><td className='tdlong1'>{data.item}</td>
                                    <td className='tdlong'>{data.code}</td>
                                    <td className='tdlong'>{data.price}</td><td className='tdlong'>{data.qty}</td>
                                    <td className='tdlong'>{data.price * data.qty}</td>
                                </tr>
                            
                            )                          
                            
                        }

                           <tr><td></td></tr>
                           <tr><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td>Total</td><td>
                                          <input type='text' value={this.state.itemlist.reduce((total,i) => (total+i.price*i.qty), 0 )} />
                                </td></tr>
                        

                        {/* {
                            this.state.itemlist.filter(data => {data.price * data.qty})
                        } */}

                    </table>
                    
                </form>
            </div>
        )
    }
}

export default BillForm;
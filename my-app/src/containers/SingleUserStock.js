import React, { Component } from 'react';
import variable from '../data/stocks.json';
import userStockPortfolio from '../data/userStockPortfolio.json';
import { Link } from 'react-router-dom';


class SingleUserStock extends Component {



    constructor(props) {

        super(props);
        console.log(this.props.amount);
        this.state = {
            sym: [],
            userId: this.props.userId,
            userStock: userStockPortfolio,
            symbol: this.props.amount

        };
        // this.setArray = this.setArray.bind(this);


        //console.log(this.state.stocks);
        //console.log(this.state.userStock);
        //console.log(this.state.userId);

        //this.sortBysymbolAsc = this.sortBysymbolAsc.bind(this); 

    }

    /* 
    setArray(){
      var tempArray = this.state.sym;
       // eslint-disable-next-line
      tempArray.sort((a,b)=>{a.symbol - b.symbol }); 
      this.setState= {
          sym: tempArray
      }}
      
      */






    render()

    {


        //console.log(  this.state.sym);
        //use the array filter() function to reduce the array from userStockPortfolio.json 
        //to just those whose userId field matches the current user id.

        // eslint-disable-next-line
        let id = parseInt(this.state.userId, 10);
        // eslint-disable-next-line
        let fileFilter = this.state.userStock.filter(function(obj) {
            if (obj.userId === id) {
                return obj;
            }
        });

        //console.log(fileFilter);
        //console.log(10);
        //create a new empty array
        // eslint-disable-next-line
        var emptyArray = [];
        // eslint-disable-next-line
        var symbArray = [];

        //loop through the reduced array, and for each element do the following:
        // eslint-disable-next-line
        fileFilter.map(function(id) {
            // eslint-disable-next-line
            variable.map(function(stock) {
                if (id.symbol === stock.symbol) {
                    let tempSymbol = stock.symbol;
                    let tempName = stock.name;
                    let tempAmount = id.amount;
                    let userReport = { symbol: tempSymbol, name: tempName, amount: tempAmount };



                    emptyArray
                        .push(userReport);



                    //console.log ("helll" +emptyArray.sort((a,b)=>{a.symbol > b.symbol })
                    //.map((a, b)=> a.symbol -
                    //b.symbol));

                    //symbArray.push(tempSymbol); 

                    //this.state.sym = emptyArray;

                }
            });
        });
        console.log(symbArray);



        return (


            <header className= "is-mobile">



  <table class="table  is-narrow is-striped is-narrow is-hoverable is-fullwidth is-mobile">
   <thead className="container is-info">
   
  
      <tr>
   
      <th onClick={this.setArray}>Symbol</th>
      <th>Name</th>
      <th>Amount</th>
  
       </tr>
    </thead>
    
    {emptyArray
    .map((user,ind)=>{
      
      
      
      return(
<tbody className="is-selected">
      
        
        <tr>
        <td >
        <Link to={"/singleStock/" + user.name} >
        <figure>
        
      {user.symbol}
        </figure>
        </Link>
        </td>
        
    
         
       
        
        
        <td >
        <Link to={"/singleStock/" + user.name} >
        <figure>
      {user.name }
        </figure>
        </Link>
        </td>
        
        
        
         <td>
        <figure>
    {user.amount}
        </figure>
        </td>
        </tr>
        
        
        
        
        </tbody>

       
        
    
    );
    
    
    })
        
    }
      
        
      
     </table>
     </header>



        );


    }


}


export default SingleUserStock;

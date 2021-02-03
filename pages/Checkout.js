
import React from 'react';

function CheckoutPage() {
    return(
        <div class="checkout">
            <div className="btn-group">
                <button className="code">Coupon code</button>
                <button className="code1">APPLY COUPON</button>
            </div>

            <div>
                <a href="#" className="clear">CLEAR CART</a>
                <a href="#" className="update">UPDATE CART</a>
             </div>

             <div className="box">
            
             <table>
                <tr>
                 <th>Cart totals</th>
                 <th></th>
                 <th></th>
                <th>SUBTOTAL</th>
                <th>$6.73</th>
             </tr>
        
             
                <tr>
                 <th><button className="shipping">Shipping</button></th>
                 <th><button className="calculation">CALCULATE SHIPPING</button></th>
    
                 </tr>
                 <tr>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th>TOTAL</th>
                 <th>$6.73</th>
                 
                 </tr>
                 </table>
                 
                 <button className="proceed">PROCEED TO CHECKOUT</button>
             </div>
            
        <style jsx>{`
    table {
        font-family: arial, sans-serif;
        width: 100%;
      }
      
      td, th {
        
        text-align: left;
        padding: 8px;
      }
        .btn-group{
            background-color: white;
            cursor: pointer; 
            padding: 10px 24px; 
        }
        .clear{
            color:black;
            margin-left:65%;
        }
        .update{
            color:black;
            margin-left:3%;
        }
        .code1{
            margin-left:20%;
        }
        .box{
            border:solid;
            margin-top:2%;
            height:200px;
        }
      
      .shipping{
          background-color:grey;
      }
      .calculation{
        margin-left:10%;
        background-color:grey;
      }
      .proceed{
        background-color:black;
        width:375px;
        height:55px;
        color:white;
        margin-left:65%;
      }
      

      `}</style>
       </div>
    )
 }
 export default CheckoutPage;
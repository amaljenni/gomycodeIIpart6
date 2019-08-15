import React from 'react'
import Mybutton from './Mybutton';
import Element from './element';




  export default class Todolist extends React.Component
  {
   

  
      state = {
    
       
        value: '',
        list: ["12", "shopping"],
        TextDecoration:"none",
          // indicateur:'',
        };
      

      onChangeValue = event => {
        this.setState({ value: event.target.value })
        // console.log(this.state.value);
      };

      onAddItem = () => {
        const previouslist=this.state.list;
        const nextlist=[this.state.value];
        const list=[...previouslist,...nextlist];
        this.setState({list:list})
       
        
    
          
        };
       
      suppelement = (index)=> {
          
          this.setState({indicateur:index});
          const newlist=this.list.splice(index, 1);
          this.setState({list:newlist})
        };
       
          
      
            
          

        //  crosselement=()=>{
          
        //    this.setState({textDecorationLine: line-throught });
         
        //  }
     
      render() {
        return (
          <div>
           
    
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChangeValue}
            />
            <Mybutton Btn={
              this.onAddItem

             
            }
            name="Add"  
            />  
            
            {/* <Mybutton Btn={
              this.onsuppitem

             
            }
            name="Delate"  
            />             */}
            
            <ul>
              
              {this.state.list.map((item,index) => (
                // <li onClick={this.crosselement}>{item}</li>
                // <li>{item}</li>
                <Element 

                children={item}
                function={()=>{
                  
                const newlist=this.state.list
                newlist.splice(index, 1);
                this.setState({list:newlist})
                }
                
                   }
                key={index}
                onClick={()=>{
                  this.setState({ TextDecoration:"line-through"})
                  
                }}   
                
                 />

              ))}
            </ul>
          </div>
        );
      }
    }
  

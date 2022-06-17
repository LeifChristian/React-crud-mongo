import { Line } from 'react-lineto';
import React, { Component } from 'react';
// import Canvas from './canvas';
import './styley.css';

export class testComp extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.clear = this.clear.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.minusTen=this.minusTen.bind(this);
        this.randomize=this.randomize.bind(this);
        this.randoMax=this.randoMax.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
        this.state = { x: 0, y: 0, history: [{x:1, y:1}], stepBack: [{x: 1, y:1}], red: '', blue: '', grn: '', oldX: 0, oldY: 0};

      
      }

      handleSubmit(event) {
        event.preventDefault();

        let x0 = document.getElementById('x0').value;
        let y0 = document.getElementById('y0').value;
        let x1 = document.getElementById('x1').value;
        let y1 = document.getElementById('y1').value;
       this.setState({x: x0, y: y0, oldX: x1, oldY: y1});


      }
    
      handleMouseMove(event) {

        this.setState({
          x: event.clientX,
          y: event.clientY
        });

        
        let newest = [...this.state.history];

        let oneStepBack = [...this.state.history];

        let okayfucker = oneStepBack.pop();

        this.setState({oneStepBack: okayfucker});
    

        for(let i=0; i<oneStepBack.length; i++){

            this.setState({oldX: oneStepBack[i].x, oldY: oneStepBack[i].y});

            console.log(oneStepBack[i].x + ' x' + oneStepBack[i].y + ' y');

         }

       

        //   this.setState({stepBack: oneStepBack});
      // this.setState({x: current.x, y: current.y})

      // this above call spreads the existing history and pushes the new value to the end of the array.

        //  let newest = [];

        // this above call resets the value of the array every time the mouse is moved, causing it to just be a single entry of existing state.
        
        newest.push({x: this.state.x, y: this.state.y});

        this.setState({history: newest});

          let max = 100;
          let min = 0;
          const q = Math.floor(Math.random() * (max - min + 1));
          let red1 = q.toString();
       
          const r = Math.floor(Math.random() * (max - min + 1));
          let blue1 = r.toString();
          
          const s = Math.floor(Math.random()* (max - min + 1));
          let grn1 = s.toString();

          this.setState({red: red1, blue: blue1, grn: grn1 })

      }
      componentDidUpdate(){
        document.body.style.backgroundColor = `rgb(${this.state.red}%, ${this.state.blue}%, ${this.state.grn}%)`
      }

      handleMouseClick(event) {

 

          alert('clic')

        
      }

      randomize () 
      
      {
        let maxX = 1189;
          let minX = 0;

          let maxy = 664;
          let miny = 0
          const q = Math.floor(Math.random() * (maxX - minX + 1));
          let xVar = q.toString();
        
       
          const r = Math.floor(Math.random() * (maxy - miny + 1));
          let yVar = r.toString();


          const q1 = Math.floor(Math.random() * (maxX - minX + 1));
          let oldxVar = q1.toString();
        
       
          const r1 = Math.floor(Math.random() * (maxy - miny + 1));
          let oldyVar = r1.toString();


          let max = 100;
          let min = 0;
          const s = Math.floor(Math.random() * (max - min + 1));
          let red1 = s.toString();
       
          const t = Math.floor(Math.random() * (max - min + 1));
          let blue1 = t.toString();
          
          const u = Math.floor(Math.random()* (max - min + 1));
          let grn1 = u.toString();

          this.setState({red: red1, blue: blue1, grn: grn1 })

          // alert (`x: ${xVar} y: ${yVar}`);
          this.setState({x: xVar, y: yVar, oldX: oldxVar, oldY: oldyVar});
          document.body.style.backgroundColor = `rgb(${this.state.red}%, ${this.state.blue}%, ${this.state.grn}%)`;
      }

      
     randoMax  () {

      this.randomize = this.randomize.bind(this);

      var i = 0;

    do { 
      this.randomize();
      setTimeout( () => { 
        
        this.randomize()}, i++);
    }
      
    while (i < 200);
      // alert(`Seizure Warning!`)
      
    }


clear() {
          this.setState({red: 100, blue: 100, grn: 100 })
  document.body.style.backgroundColor = `rgb(${this.state.blue}%, ${this.state.blue}%, ${this.state.blue}%)`;
 this.setState({history: [{x: 0, y: 0}]});

 this.setState({oldX: 0, oldY: 0});

 this.setState({x: 0, y: 0})
//  alert('click');\

document.getElementById("formId").reset();

}



minusOne (){
  let newHistory = this.state.history.slice(0, this.state.history.length-2);
  this.setState({history: newHistory});

  let max = 100;
          let min = 0;
          const s = Math.floor(Math.random() * (max - min + 1));
          let red1 = s.toString();
       
          const t = Math.floor(Math.random() * (max - min + 1));
          let blue1 = t.toString();
          
          const u = Math.floor(Math.random()* (max - min + 1));
          let grn1 = u.toString();

          this.setState({red: red1, blue: blue1, grn: grn1 })
  // alert(this.state.history.length);
  // console.log(this.state.history[0])
}

minusTen (){
  let newHistory = this.state.history.slice(0, this.state.history.length-10);
  this.setState({history: newHistory});
  // alert(this.state.history.length);
  // console.log(this.state.history[0])

  let max = 100;
          let min = 0;
          const s = Math.floor(Math.random() * (max - min + 1));
          let red1 = s.toString();
       
          const t = Math.floor(Math.random() * (max - min + 1));
          let blue1 = t.toString();
          
          const u = Math.floor(Math.random()* (max - min + 1));
          let grn1 = u.toString();

          this.setState({red: red1, blue: blue1, grn: grn1 })
}

      render() {

// for(let i=0; i<this.state.history.length; i++){alert(this.state.history[i].x)}

const xItems = this.state.history.map((item, i) => (<li>{item.x}</li>));
const yItems = this.state.history.map((item, i) => (<li>{item.y}</li>));

const oldxItems = this.state.stepBack.map((olditem, i) => (<li>{olditem.x}</li>));
const oldyItems = this.state.stepBack.map((olditem, i) => (<li>{olditem.y}</li>));

        return (

          <div > <button onClick={this.randomize}>Rando Once</button>
          <button onClick={this.randoMax}>Rando Many</button>
          {/* <button onClick={this.minusOne}>minus One</button> 
          <button onClick={this.minusTen}>minus Ten</button>   */}
          <button id='clearButton' onClick={this.clear} >clear</button>
          <form onSubmit={this.handleSubmit} id="formId"><input id='submitButton' type='submit' value ='submit'></input>
          X: <input type='number' id='x0' onChange={ (event) => this.setState({x: event.target.value})}></input>Y: <input type='number' id='y0' onChange={ (event) => this.setState({y: event.target.value})}></input>
          X2: <input type='number' id='x1' onChange={ (event) => this.setState({oldX: event.target.value})}></input>Y2: <input type='number' id='y1' onChange={ (event) => this.setState({oldY: event.target.value})}></input>
          </form>

          
          <div style={{ height: '100vh' }}  onMouseMove={this.handleMouseMove} >
            
          <h1>Move the mouse around!</h1>
          <p style={ {fontWeight: "bold", color: `rgb(${this.state.grn}%, ${this.state.red}%, ${this.state.blue}%)`}}>The current mouse position is ({this.state.x}, {this.state.y})</p>  
        <p style={ {fontWeight: "bold", color: `rgb(${this.state.grn}%, ${this.state.red}%, ${this.state.blue}%)`}}>The old mouse position is:  {this.state.oldX} {this.state.oldY}</p>
        
        
        

          {/* <p style={ {fontWeight: "bold", color: `rgb(${this.state.grn}%, ${this.state.red}%, ${this.state.blue}%)`}}>The current mouse position is ({this.state.x}, {this.state.y})</p>   */}
          {/* {this.state.history.map((item,i) => <li style={{listStyle: 'none', fontWeight: 'bold', }}key={i}>{item}</li>)} */}
          
          {/* <Line x0={this.state.x} y0={this.state.y} x1={this.state.history} y1={this.state.x}/> */}



          
          {/* {this.state.history.map((item, i) => 
          <Line x0={oldxItems} 
          y0={oldyItems} x1={xItems} y1={yItems} key={i}></Line>)}  */}

 
{this.state.stepBack.map((item, i) => 
          <Line x0={oldxItems} 
          y0={oldyItems} x1={this.state.x} y1={this.state.y} key={i}></Line>)} 

<Line x0={this.state.oldX} y0={this.state.oldY} x1={this.state.x} y1={this.state.y}></Line>

{/*           

          {this.state.history.map((item, i) => 
          <Line x0={this.state.history[this.state.history.length-1].x} 
          y0={this.state.history[this.state.history.length-1].y} x1={this.state.x} y1={this.state.y} key={i}></Line>)}

          {<Line x0={this.state.x} y0={this.state.y} x1={this.state.history[this.state.history.length-1].x} 
          y1={this.state.history[this.state.history.length-1].y}></Line>} */}



{/* <Line x0={this.state.x} y0={this.state.y} x1={this.state.stepBack[this.state.stepBack.length-1].x} y1={this.state.stepBack[this.state.stepBack.length-1].y }></Line>
           */}
          
      

    
    
          

           
     

          
        </div></div>
         
        );
      }
}

export default testComp



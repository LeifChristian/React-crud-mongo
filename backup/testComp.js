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
        
        this.state = { x: 0, y: 0, history: [], oneStepBack: [], red: '', blue: '', grn: ''};

       
      
      }
    
      handleMouseMove(event) {

        this.setState({
          x: event.clientX,
          y: event.clientY
        });

        // let newest = [...this.state.history];

      // this above call spreads the existing history and pushes the new value to the end of the array.

        let newest = [];

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


// componentDidMount(){this.setState(this.state.history [{x: '', y: ''}])}



      componentDidUpdate(){

         


      
      
        document.body.style.backgroundColor = `rgb(${this.state.red}%, ${this.state.blue}%, ${this.state.grn}%)`;

        // alert(`X: ${this.state.x} Y: ${this.state.y}`);
          


        // this.setState({history: [{x: this.state.x, y: this.state.y}]})

        // this.setState({history: })
        // alert(this.state.history);
        // console.log(this.state.history);
        // alert(this.state.history[0];

        
      }

      handleMouseClick(event) {

          this.setState({
            x: event.clientX,
            y: event.clientY
          });
  
          let newest = [...this.state.history];
          
          newest.push( {x: this.state.x, y: this.state.y});
  
          this.setState({history: newest});

          
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
          this.setState({x: xVar, y: yVar});
          document.body.style.backgroundColor = `rgb(${this.state.red}%, ${this.state.blue}%, ${this.state.grn}%)`;
      }

      
     randoMax  () {
      var i = 0;
    do {
      this.randomize();
      setTimeout( () => { this.randomize()}, i++);
    }
      
    while (i < 100);
      // alert(`Seizure Warning!`)
    }


clear() {

 

          this.setState({red: 100, blue: 100, grn: 100 })
  document.body.style.backgroundColor = `rgb(${this.state.blue}%, ${this.state.blue}%, ${this.state.blue}%)`;
 this.setState({history: []});
//  alert('click');

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

        return (

          <div > <button onClick={this.randomize}>Rando Once</button><button onClick={this.randoMax}>Rando Many</button><button onClick={this.minusOne}>minus One</button> <button onClick={this.minusTen}>minus Ten</button>  <button onClick={this.clear} >clear</button><div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove} >
            
          <h1>Move the mouse around!</h1>
          <p style={ {fontWeight: "bold", color: `rgb(${this.state.grn}%, ${this.state.red}%, ${this.state.blue}%)`}}>The current mouse position is ({this.state.x}, {this.state.y})</p>  

          {/* {this.state.history.map((item,i) => <li style={{listStyle: 'none', fontWeight: 'bold', }}key={i}>{item}</li>)} */}
          
          {/* <Line x0={this.state.x} y0={this.state.y} x1={this.state.history} y1={this.state.x}/> */}

          {this.state.history.map((item, i) => <Line x0={this.state.x} y0={this.state.y} x1={item.x} y1={item.y} key={i}></Line>)}

          {/* <Line x0={this.state.x} y0={this.state.y} x1={this.state.y} y1={this.state.x}></Line> */}
          
          {/* <canvas id="tutorial" width="1500" height="1500"></canvas> */}
        </div></div>
         
        );
      }
}

export default testComp



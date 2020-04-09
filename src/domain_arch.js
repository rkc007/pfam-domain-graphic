import React, { Component } from "react";
import ReactDOM from "react-dom";
import  PfamGraphic  from'./static/domain-arch.js'
import './static/domain_arch.css'





class Domain_arch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curids : '',
    };
    this.pfamG  = new PfamGraphic();
  }

  componentDidMount() {
    this.renderDomainArch();
  }

  renderDomainArch(){
    const parent2 = document.createElement('span');
    parent2.setAttribute("id", (Math.floor(Math.random() * 100)).toString() );
    document.getElementById("main_domain_cont").appendChild(parent2); 
    const data2 = { 
      "length" : "950", 
      "regions" : [ 
        { 
          "modelStart" : "5", 
          "modelEnd" : "292", 
          "colour" : "#2dcf00", 
          "endStyle" : "jagged", 
          "startStyle" : "jagged", 
          "display" : true, 
          "end" : "361", 
          "aliEnd" : "361", 
          "href" : "/family/PF00082", 
          "text" : "Peptidase_S8", 
          "modelLength" : "307", 
          "metadata" : { 
            "scoreName" : "e-value", 
            "score" : "1.3e-38", 
            "description" : "Subtilase family", 
            "accession" : "PF00082", 
            "end" : "587", 
            "database" : "pfam", 
            "aliEnd" : "573", 
            "identifier" : "Peptidase_S8", 
            "type" : "Domain", 
            "aliStart" : "163", 
            "start" : "159" 
          }, 
          "type" : "pfama", 
          "aliStart" : "163", 
          "start" : "159" 
        }, 
        { 
          "modelStart" : "5", 
          "modelEnd" : "292", 
          "colour" : "#2dcf00", 
          "endStyle" : "jagged", 
          "startStyle" : "jagged", 
          "display" : true, 
          "end" : "587", 
          "aliEnd" : "573", 
          "href" : "/family/PF00082", 
          "text" : "Peptidase_S8", 
          "modelLength" : "307", 
          "metadata" : { 
            "scoreName" : "e-value", 
            "score" : "1.3e-38", 
            "description" : "Subtilase family", 
            "accession" : "PF00082", 
            "end" : "587", 
            "database" : "pfam", 
            "aliEnd" : "573", 
            "identifier" : "Peptidase_S8", 
            "type" : "Domain", 
            "aliStart" : "163", 
            "start" : "159" 
          }, 
          "type" : "pfama", 
          "aliStart" : "470", 
          "start" : "470" 
        }, 
      ], 
      "metadata" : { 
        "database" : "uniprot", 
        "identifier" : "Q560V8_CRYNE", 
        "organism" : "Cryptococcus neoformans (Filobasidiella neoformans)", 
        "description" : "Putative uncharacterized protein", 
        "taxid" : "5207", 
        "accession" : "Q560V8" 
      }, 
    }
    // this.setState({parent2:parent2,data2:data2})
    var c = new PfamGraphic( parent2,data2 );
    // this.pfamG.initialize
    return c.render(parent2,data2);
    // this.forceUpdate();
    console.log(this.pfamG);
  }

//   renderPfam(){
//     this.pfamG.initialize
//     this.pfamG.render(this.state.parent2,this.state.data2);
//     console.log(this.pfamG);
//   }

  render() {
    console.log('render() lifecycle')
    return (
     <div id='main_domain_cont'>
  
      </div>
    
    );
  }
}

export default Domain_arch;

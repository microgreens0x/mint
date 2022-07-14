import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

import db  from "../../database";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      addressTo: "",
      gasScore: "",
      gasScoreLot: "",
      gasScoreHome: "",
      gasTotal: "",
      homeStyle: "",
      mintcount: 0,
      payamount: "",
    };
  }


  Load_New_URL= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Undeveloped"){
      window.alert('Virtual Reality Undeveloped');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  Load_New_URLOpensea= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open('https://opensea.io/' + newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  Load_New_Image= async (e)=>{


    }

  componentDidMount = async () => {

    window.scrollTo(0, 0);
    console.log(this.props);
    let punkid = new URLSearchParams(this.props.location.search).get( "punkid" );
    if(punkid === '' || punkid === null || punkid === undefined)punkid = "1";
    this.setState({ punkid });
    //this.props.punksOfferedForSale(punkid);


  };

  callClaimPunkFromApp = (e) => {
    e.preventDefault();
      this.props.claimPunk(
        this.state.mintcount,
        this.state.payamount
      );
  };





  render() {

    //const elements = this.props.cryptoBoys;

    const items = []
    const itemsHomes = []
    const itemsBottomHomes = []
    const itemsBottom = []

    let startHouse = Math.floor(this.state.punkid/20);

    if(this.state.punkid%20 >1){

    }

    if (startHouse==0 )startHouse=0;
    else if(this.state.punkid%20 ==0 ){
      startHouse = startHouse-1;
      startHouse = (startHouse * 20);
    }
    else startHouse = (startHouse * 20);


    let houseNumber = 1;
    for (let j = startHouse; j< (startHouse+10).valueOf(); j++) {
        let nftNumber = (startHouse + houseNumber).valueOf();
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
        if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
        items.push(<div class={divClass} ><small>NFT NO {nftNumber} <hr className="my-1" /> {home.address} </small></div>)
        houseNumber +=1;
    }
    houseNumber = 1;
    for (let j = startHouse; j< (startHouse+10).valueOf(); j++) {

        let nftNumber = (startHouse + houseNumber).valueOf();
        var newLinkUrl = '/mint?punkid=' + nftNumber;
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        itemsHomes.push(<div class="col-sm m-0 p-0 bottom" ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>)
        houseNumber +=1;
    }
    houseNumber = 11;
    for (let j = startHouse+10; j< (startHouse+20).valueOf(); j++) {
        let nftNumber = (startHouse + houseNumber).valueOf();
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
        if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
        itemsBottomHomes.push(<div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /> <small><hr className="my-1" /> {home.address} </small></div>)
        houseNumber +=1;
    }

    houseNumber = 11;
    for (let j = startHouse+10; j< (startHouse+20).valueOf(); j++) {
        let nftNumber = (startHouse + houseNumber).valueOf();
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
        if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
        itemsBottom.push(<div class={divClass} ><hr className="my-1" /> <small>NFT {nftNumber} </small></div>)
        houseNumber +=1;
    }
    return (
      <div>

        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
                    Click Mint and Accept on Metamask

                    </div>
        </div>
        </div>

        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
          <div className="col-md-12">
            Mint Price 0.069 ETH
            <div>
              <input
                required
                type="number"
                name="mintcount"
                id="mintcount"
                value={this.state.mintcount}
                className="form-control"
                placeholder="Mint Count"
                onChange={(e) =>
                  this.Load_New_Image(e)
                }
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="payamount"
                id="payamount"
                value={this.state.payamount}
                className="form-control"
                placeholder="Pay Amount ETH"
                onChange={(e) =>
                  this.Load_New_Image(e)
                }
              />
            </div>
            <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Mint
              </button>
              </div>
            </div>
          </div>
        </form>
          <hr className="my-4" />
              Microgreens0x &copy; 2022. All rights reserved.
          <hr className="my-4" />
      </div>
    );
  }
}

export default FormAndPreview;

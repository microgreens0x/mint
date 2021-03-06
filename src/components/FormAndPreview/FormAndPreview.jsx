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
      payamount: 0,
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
      let mintPrice = document.getElementById('mintamount').value;
      this.state.mintcount =e.target.value;
      this.state.payamount  = e.target.value * mintPrice;
      this.setState({
        mintcount : e.target.value
      })
      this.setState({
        payamount : this.state.payamount
      })
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
        this.state.payamount.toString()
      );
  };

  callClaimPunkFromAppwl = (e) => {
    let mintPrice = document.getElementById('mintamountwl').value;
      e.preventDefault();
        this.props.claimPunkwl(
          mintPrice
        );
    };




  render() {

    //const elements = this.props.cryptoBoys;

    const items = []
    const itemsHomes = []
    const itemsBottomHomes = []
    const itemsBottom = []

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
            Mint Price 0.06 ETH
            <div>
              <input
                required
                type="number"
                name="mintcount"
                id="mintcount"
                className="form-control"
                placeholder="Mint Count"
                onChange={(e) =>
                  this.Load_New_Image(e)
                }
              />
            </div>
              <hr className="my-2" />
            <div>
              <input
                required
                type="number"
                name="mintamount"
                value="0.06"
                id="mintamount"
                className="form-control"
                placeholder="Pay Amount"
              />

            </div>
              <hr className="my-2" />
            <div>
              <input
                required
                type="number"
                name="payamount"
                value={this.state.payamount}
                id="payamount"
                className="form-control"
                placeholder="Pay Amount"
              />

            </div>


              <hr className="my-2" />
            <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Public Mint
              </button>
              </div>
            </div>
          </div>
        </form>
          <hr className="my-4" />
          <form onSubmit={this.callClaimPunkFromAppwl} className="pt-4 mt-1">
            <div className="row">
            <div className="col-md-12">
              Mint Price 0.02 ETH

                <hr className="my-2" />
              <div>
                <input
                  required
                  type="number"
                  name="mintamountwl"
                  value="0.02"
                  id="mintamountwl"
                  className="form-control"
                  placeholder="Pay Amount"
                />

              </div>


                <hr className="my-2" />
              <div>
                <button
                  id="mintBtn22"
                  style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                  type="submit"
                  className="btn mt-4 btn-block btn-outline-primary"
                >
                  Whitelist Mint
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

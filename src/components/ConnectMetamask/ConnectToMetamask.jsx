import React from "react";
import metamaskIcon from "./metamask.svg";

import Web3 from 'web3';



const items = []
const itemsonchain = []
const itemschar = []
const itemsonchainmma = []

for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 2000);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot/' + s + '.png';
        items.push(<div class="card col-md-4" ><img class="img-fluid"  src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot' + s + '.png';
        itemsonchain.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = Math.floor(Math.random() * 250);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot-characters/' + s + '.png';
        itemschar.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/mmaloot' + s + '.png';
        itemsonchainmma.push(<div class="card col-md-4" ><a href="https://app.nftrade.com/assets/bsc/0x48bf76b0dcc1326ae962b9301c40ee1ea399e186" ><img class="img-fluid" src={newImageUrl} /></a><div class="card-body"> <h5 class="card-title">NO {index} </h5></div></div>)
}

const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          The Surviveth Game
        </h1>
        <hr className="my-4" />
        <a href="https://opensea.io/collection/thebingogame" ><img class="img-fluid" src="/images/main.logo.png" /></a>

        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
      </div>

      <div className="container">
        <hr className="my-4" />
            Metagascar &copy; 2021 Metagascar Project Inc. All rights reserved.
        <hr className="my-4" />
      </div>
    </div>

  );
};

export default ConnectToMetamask;

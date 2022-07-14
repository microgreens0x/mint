import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Metagascar Metaverse</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">
                Surviveth Contract Address : 0xd8daecc7b7e96461ca0a68297aa01281b61ef2ed
            </p>
          </div>
        </div>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">Account address :</p>
            <h4>{accountAddress}</h4>
            <p className="lead">Account balance :</p>
            <h4>{accountBalance} ETH</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;

"use client";

import React, { useEffect, useState } from "react";
import sal from "sal.js";

const PaymentModal = ({paymentFilter, setPaymentFilter, setPaymentFilterPopup, filterPayment}) => {

  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      {/* ==== DisLike Section Modal ==== */}
      <div
        id="userModal"
        className="rbt-modal-box dislike-modal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wrapper top-flashlight leftside light-xl">
            <h4>Filter Payments</h4>
            <div className="inputBox">
              <label>Start Date</label>
              <input type="date" name="start_date" value={paymentFilter.start_date} onChange={(e) => setPaymentFilter({...paymentFilter, start_date: e.target.value})} pattern="\d{2}-\d{4}-\d{2}" />             
            </div>
            <div className="inputBox">
              <label>End Date</label>
              <input type="date" name="end_date" value={paymentFilter.end_date} onChange={(e) => setPaymentFilter({...paymentFilter, end_date: e.target.value})} />              
            </div>
            <button onClick={filterPayment} className="btn-default round">
              {paymentFilter.filter_progress ? 'Filtering payments...' : 'Apply Filter'}
            </button>
            <button className="close-button" onClick={() => setPaymentFilterPopup(false)}>
              <i className="feather-x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;

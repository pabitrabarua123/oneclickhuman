// store/index.js
import { configureStore } from '@reduxjs/toolkit';

const accountInfo = {
    loading: false,
    user_id: null,
    user_email: null,
    email_verification: false,
    time: null,
    status : null, 
    quota : null, 
    current_date : null, 
    credits_availbe : null, 
    subscrption_status : null, 
    cancellation_status : null, 
    onetime_credit : null, 
    onetime_plan : null, 
    monthly_plan : null, 
    subscription_amount : null, 
    onetime_amount : null, 
    subscription_renewal_date : null, 
    is_lifetime_active : null, 
    lifetime_plan : null, 
    lifetime_refill_date : null, 
    lifetime_next_refill_date : null, 
    lifetime_credits : null, 
    max_lifetime_used : null, 
    quota_used : null, 
    currency : null, 
    role : null
}

const accountReducer = (state = accountInfo, action) => {
  switch (action.type) {
    case 'loading-user':
    return {...state, loading: true };  
    
    case 'loading-success':
    return {...state, 
        loading: false, 
        user_id: action.payload.user_id,
        user_email: action.payload.user_email,
        email_verification: action.payload.email_verification,
        time: action.payload.time,
        status : action.payload.status, 
        quota : action.payload.quota, 
        current_date : action.payload.current_date, 
        credits_availbe : action.payload.credits_availbe, 
        subscrption_status : action.payload.subscrption_status, 
        cancellation_status : action.payload.cancellation_status, 
        onetime_credit : action.payload.onetime_credit, 
        onetime_plan : action.payload.onetime_plan, 
        monthly_plan : action.payload.monthly_plan, 
        subscription_amount : action.payload.subscription_amount, 
        onetime_amount : action.payload.onetime_amount, 
        subscription_renewal_date : action.payload.subscription_renewal_date, 
        is_lifetime_active : action.payload.is_lifetime_active, 
        lifetime_plan : action.payload.lifetime_plan, 
        lifetime_refill_date : action.payload.lifetime_refill_date, 
        lifetime_next_refill_date : action.payload.lifetime_next_refill_date, 
        lifetime_credits : action.payload.lifetime_credits, 
        max_lifetime_used : action.payload.max_lifetime_used, 
        quota_used : action.payload.quota_used, 
        currency : action.payload.currency, 
        role : action.payload.role
    };

    case 'quota-update-monthly':
      return {...state, credits_availbe: action.quota};

    case 'quota-update-onetime':
      return {...state, onetime_credit: action.quota};  

    default: 
      return state;
  }
}

const store = configureStore({
   reducer:  accountReducer
});

export default store;

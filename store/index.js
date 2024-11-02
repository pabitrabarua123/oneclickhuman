// store/index.js
import { configureStore } from '@reduxjs/toolkit';

const accountInfo = {
    loading: false,
    user_id: null,
    user_email: null,
    user_status: null,
    role: null,
    time: null,
    credits_availbe: 0,
    subscription_amount: 0, 
    onetime_credit: 0,
    onetime_plan: 0,
    lifetime_credits: 0,
    lifetime_plan: 0,
    subscription_renewal_date: '',
}

const accountReducer = (state = accountInfo, action) => {
  switch (action.type) {
    case 'loading':
    return {...state, loading: true };  
    
    case 'success':
    return {...state, 
        loading: false, 
        user_id: action.payload.user_id,
        user_email: action.payload.user_email,
        user_status: action.payload.user_status,
        // role: action.payload.role,
        time: action.payload.time,
        // credits_availbe: action.payload.credits_availbe, 
        // subscription_amount: action.payload.subscription_amount, 
        // onetime_credit: action.payload.onetime_credit, 
        // onetime_plan: action.payload.onetime_plan, 
        // lifetime_credits: action.payload.lifetime_credits, 
        // lifetime_plan: action.payload.lifetime_plan, 
        // subscription_renewal_date: action.payload.subscription_renewal_date 
    };

    default: 
      return state;
  }
}

const store = configureStore({
   reducer:  accountReducer
});

export default store;

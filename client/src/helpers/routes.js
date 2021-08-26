import React from 'react';
import { Route , Redirect } from 'react-router-dom';





export const ProtectedRoute = ({ user , children , ...otherProps}) => {
  return (
      <Route {...otherProps} render={({location})=>{
        if(user){
          return children;
        }
        if(!user){
          return (<Redirect to={{pathname : 'login', state : {from : location} }} />);
        }
        return null;
      }} />
  )
}

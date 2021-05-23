import React, { Component } from 'react';
import FormInput from '../forminput/FormInputComponent';
import './SigninStyles.scss'
import CustomButton from '../Custombutton/CustomButton';
import { auth,signinWithGoogle } from '../../components/firebase/firebaseUtils'

class Signin extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            email:'',
            password:''
        }
    }


   handleSubmit =async event =>{
       event.preventDefault();

      const {email,password} = this.state;
      try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({email:'', password:''});
      }catch(error){
          console.log(error);

      }

       
   }

   handleChange =(event) =>{
       const {value, name } = event.target;
       this.setState({[name]:value})
   }
    
   

    render() {
        return (
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with ur Email and Password</span>
                <form onSubmit ={this.handleSubmit}>
                    <FormInput
                     name= 'email'
                     type="email"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label='email'
                     required/>
                     

                     <FormInput 
                     name= 'password' 
                     type="password"
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='password'
                     required/>

                     <div className='buttons'>
                     <CustomButton type="submit"  >Sign In</CustomButton>
                     <CustomButton 
                     onClick={signinWithGoogle} isGoogleSignIn>
                     {' '}  
                     Sign In with Google</CustomButton>


                    </div>
                     

                     
                </form>
                
            </div>
        )
    }
}


export default Signin;
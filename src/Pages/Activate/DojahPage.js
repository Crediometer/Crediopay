import Dojah from 'react-dojah'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const DojahPage = ({profile}) => {
    const history = useNavigate()
    const appID = process.env.app_id;
    const phoneNumber = profile?.phoneNumber;
    const newphoneNumber = phoneNumber?.startsWith('+') ? '' + phoneNumber.slice(1) : phoneNumber; 
    /**
     *  This is your account public key
     *  (go to your dashboard at
     *  https://dojah.io/dashboard to
     *  retrieve it. You can also regenerate one)
     */
    const publicKey = process.env.public_key;
  
    /**
     *  This is the widget type you'd like to load
     *  (go to your dashboard at
     *  https://dojah.io/dashboard to enable different
     *  widget types)
     */
    const type = "custom";
  
    const config = {
        widget_id: process.env.widget_id //this is generated from easyonboard 
    };
  
    /**
     *  These are the user's data to verify, options
     *  available to you possible options are:
     *  {first_name: STRING, last_name: STRING, dob: DATE STRING}
     *
     *  NOTE: Passing all the values will automatically skip
     *  the user-data page (thus the commented out `last_name`)
     */
    const userData = {
      first_name: "Aleriwa Precious", //Optional
    //   last_name: {$last_name}, //Optional
      dob: "2003-10-08", //YYYY-MM-DD Optional
      residence_country: 'NG', //Optional
      email: "aleriwaprecious70@gmail"//optional
    };
  
    /**
     *  These are the metadata options
     *  You can pass any values within the object
     */
    const metadata = {
      user_phoneNumber: newphoneNumber,
    };
   
  
    /**
     * @param {String} type
     * This method receives the type
     * The type can only be one of:
     * loading, begin, success, error, close
     * @param {String} data
     * This is the data from doja
     */
    const response = (type, data) => {
      // console.log(type, data);
      if(type === 'success'){ 
        history('/activate')
      }else if(type === 'error'){
        history('/dashboard')
      }else if(type === 'close'){
        history('/dashboard')
      }else if(type === 'begin'){
      }else if(type === 'loading'){
      }
    }
    return ( 
        <>
           <Dojah
                response={response}
                appID={appID}
                publicKey={publicKey}
                type={type}
                config={config}
                // userData={userData}
                metadata={metadata}
            />
        </>
    );
}
const mapStoreToProps = (state) => {
  return {
    profile: state.getprofile.data
  };
};
 
export default connect(mapStoreToProps,)(DojahPage);
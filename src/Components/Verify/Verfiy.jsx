import React, { useEffect  , useState} from "react";
import authservice from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
function Verfiy() {
    const navigate = useNavigate();
    const [message, setmessage] = useState("")
  useEffect(() => {
    const promise = authservice.updateverification()
    .then(response => {
        setmessage('Email verified successfully!');
        // Redirect to another page after a short delay
        setTimeout(() => {
            navigate(''); // Change this to your desired route
        }, 2000); // 2-second delay
    })
    .catch(error => {
        setmessage('Verification failed.');
        console.error(error);
    });
  }, []);

  return <div>{message}</div>;
}

export default Verfiy;

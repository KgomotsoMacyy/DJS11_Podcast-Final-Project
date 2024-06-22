import React, { useState } from 'react'
import Header from '../components/Header/header';
import { InputComponent } from 

function SignUpPage() {
    const [fullName,setFullName] = useState("");
    return (
        <div>
            <Header />
            <div>
                <InputComponent />
            </div>
        </div>

    );
}

export default SignUpPage;
import { useState } from 'react';

// Helpers
import isValidEmail from '../../helpers/isValidEmail';

// Styles
import "./styles.css";

const InputMails = () => {
    const [emails, setEmails] = useState('');
    const [validEmails, setValidEmails] = useState<any>([]);
    const [invalidEmails, setInvalidEmails] = useState<any>([]);

    const checkMails = () => {
        console.info("Nombre d'email détéctés :::", emails.split(',').length)
        for (let email of emails.split(',')) {
            email = email.split('\n')[0];
            if (isValidEmail(email)) {
                setValidEmails((prevState: any) => [...prevState, email]);
            } else {
                if (email.length > 0) {
                    setInvalidEmails((prevState: any) => [...prevState, email]);
                }
            }
        }
    }

    console.log("validEmails", validEmails);
    console.log("invalidEmails", invalidEmails);

    return (
        <div className="__input_mails">
            <textarea id="InputMailsId" name="InputMails" rows={4} cols={55}
                placeholder="email1@email.com, email2@email.com, ..."
                onChange={e => setEmails(e.target.value)}
            >
            </textarea>
            <button onClick={() => checkMails()}>Start</button>
        </div>
    )
}

export default InputMails;
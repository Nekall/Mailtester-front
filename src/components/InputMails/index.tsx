import { useState } from 'react';

// Helpers
import isValidEmail from '../../helpers/isValidEmail';

// Styles
import "./styles.css";

const InputMails = () => {
    const [emails, setEmails] = useState<string>('');
    const [validEmails, setValidEmails] = useState<Array<string>>([]);
    const [invalidEmails, setInvalidEmails] = useState<Array<string>>([]);
    const [isStart, setIsStart] = useState<boolean>(false);

    const checkMails = () => {
        for (let email of emails.split(',')) {
            email = email.split('\n')[0].trim();
            if (isValidEmail(email)) {
                setValidEmails((prevState: any) => [...prevState, email]);
            } else {
                setInvalidEmails((prevState: any) => [...prevState, email]);
            }
        }
        setIsStart(true);
    }

    return (
        isStart ?
            <div className="__input_mails_result">
                <textarea className="__valid" rows={10} cols={25} value={validEmails.join(',')}>
                </textarea>
                <textarea className="__invalid" rows={10} cols={25} defaultValue={invalidEmails.join(',')}>
                </textarea>
                <button onClick={() => {
                    setIsStart(false);
                    setEmails('');
                    setValidEmails([]);
                    setInvalidEmails([]);
                }}>Reset</button>
            </div>
            :
            <div className="__input_mails">
                <textarea rows={4} cols={55}
                    placeholder="email1@email.com, email2@email.com, ..."
                    onChange={e => setEmails(e.target.value)}
                    value={emails}
                >
                </textarea>
                <button onClick={() => checkMails()}>Start</button>
            </div>
    )
}

export default InputMails;

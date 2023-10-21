import { useState } from "react";

// Components
import Header from "../../components/Header";
import Terminal from "../../components/Terminal";
import InputMails from "../../components/InputMails";

const Home = () => {
  const [terminal] = useState<any>([
    "Welcome to MailTester, a tool to checking e-mail addresses.",
    "Please, follow the instructions below",
    "Enter mail(s) here, separate with coma.",
    "(Exemple: email1@email.com, email2@email.com, ...)",
  ]);

  return (
    <div className="container">
      <Header />
      <Terminal terminal={terminal} />
      <InputMails />
    </div>
  );
};

export default Home;

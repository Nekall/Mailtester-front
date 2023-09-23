import { useState } from "react";

// Components
import Header from "../../components/Header";
import Terminal from "../../components/Terminal";

const Home = () => {
  const [terminal] = useState<any>([
    "Welcome to MailTester, a tool to checking e-mail addresses.",
    "Please, follow the instructions below",
    "There are two modes: ",
    "  - Single e-mail address verification",
    "  - Bulk e-mail address verification",
    "In any case, no e-mail address is registered in the server.",
    "",
    "",
    "In progress...",
  ]);

  return (
    <div className="container">
      <Header />
      <Terminal terminal={terminal} />
    </div>
  );
};

export default Home;

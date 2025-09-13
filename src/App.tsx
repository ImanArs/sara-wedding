import "./App.css";
import Names from "./components/Names";
import InvitationText from "./components/InvitationText";
import Timeline from "./components/Timeline";
import ChangeLanguage from "./components/ChangeLanguage";
import { I18nProvider } from "./i18n";
import GuestForm from "./components/GuestForm";

function App() {
  return (
    <I18nProvider>
      <div className="min-h-svh relative overflow-hidden flex flex-col items-center">
        <ChangeLanguage />
        <main className="w-full max-w-[500px]">
          <div className="text-black">
            <Names />
            <InvitationText />
            <Timeline />
            <GuestForm />
          </div>
        </main>
      </div>
    </I18nProvider>
  );
}

export default App;

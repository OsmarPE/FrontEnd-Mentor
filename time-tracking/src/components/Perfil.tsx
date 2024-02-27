import perfil from "../assets/images/image-jeremy.png";
import { modeTime } from "../type";

interface Props {
  mode: modeTime;
  setMode: (value: modeTime) => void;
}

const modes: modeTime[] = ["daily", "weekly", "monthly"];

function Perfil({ mode, setMode }: Props) {
  return (
    <article className="perfil">
      <div className="perfil__top">
        <img className="perfil__image" src={perfil} alt="image of perfil" />
        <div className="">
          <span className="perfil__subtitle">Report for</span>
          <h1 className="perfil__name">Jeremy Jhomson</h1>
        </div>
      </div>
      <div className="perfil__actions">
        
        {modes.map((title) => (
          <button
            onClick={() => setMode(title)}
            className={title === mode ? "active" : ""}
          >
            {title}
          </button>
        ))}
        
      </div>
    </article>
  );
}

export default Perfil;

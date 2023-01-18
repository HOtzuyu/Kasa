import etoileR from "../../assets/etoileR.svg";
import etoileG from "../../assets/etoileG.svg";
import "../../utils/css/style.css";

function NoteEtoiles({ note }) {
  let starsArray = [];

  for (let i = 0; i < 5; i++) {
    i < note
      ? starsArray.push(<img src={etoileR} alt=' ' key={i} />)
      : starsArray.push(<img src={etoileG} alt=' ' key={i} />);
  }

  return <div className='note'>{starsArray}</div>;
}

export default NoteEtoiles;

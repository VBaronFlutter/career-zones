import styles from './CraftSwitcher.scss';
import { useContext } from 'react';
import { CraftContext } from '../../context/craft';

const crafts = [
  { key: "engineering", title: "An Engineer" },
  { key: "product", title: "A Product Owner" },
  { key: "scrum", title: "A Scrum Master" },
  { key: "test", title: "A Test Engineer" }
];

export default function CraftSwitcher({ version }) {
  const { craft, setCraft } = useContext(CraftContext);
  const updateCraft = (el) => setCraft(el.target.value);

  return (
    <>
        <style jsx>{styles}</style>
        
        <div className={`${version}-switcher`}>
            <h2>I work in the 
            <div className="autoComplete_wrapper">
                <input id="autoComplete" placeholder="International Sports" type="search" dir="ltr" spellCheck="false" autoCorrect="off" autoComplete="off" />
            </div>
            tribe</h2>
            <h2>As
            <select name="role" id="role-select" value={craft} onChange={updateCraft}>
                {crafts.map(cft => <option key={cft.key} value={cft.key}>{cft.title}</option>)}
                </select>
            </h2>
        </div>
    </>
  );
}

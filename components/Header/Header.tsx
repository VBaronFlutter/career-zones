import styles from './Header.scss';

export default function Header() {
  return (
    <>
      <style jsx>{styles}</style>

      <header>
        <div>
          <h1>Career Zones</h1>
          <h2>I work in the 
            <div className="autoComplete_wrapper">
                <input id="autoComplete" placeholder="International Sports" type="search" dir="ltr" spellCheck="false" autoCorrect="off" autoComplete="off" />
            </div>
          tribe</h2>
            <h2>As 
              <select name="role" id="role-select">
                  <option value="engineer">An Engineer</option>
                  <option value="po">A Product Owner</option>
                  <option value="scrum">A Scrum Master</option>
                  <option value="seit">A Test Engineer</option>
              </select>
            </h2>
          </div>
      </header>

    </>
  );
}

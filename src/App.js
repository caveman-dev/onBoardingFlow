import { useState } from 'react';
import './App.css';
import { InputText } from 'primereact/inputtext';
import logo from './Assets/Images/logo.png';
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';
function App() {
  const [tabStatus, setTabStatus] = useState(1);
  const [cardStatus, setCardStatus] = useState(true);
  const [name, setName] = useState('');
  return (
    <div className="App main">
      <div className="main-child">
        <div className="logo-parent">
          <div className="logo">
            <div>
              <img heigth="36" width="36" src={logo} />
            </div>
            <div className="logo-title">Eden</div>
          </div>
        </div>
        <div className="stepper-tab-parent">
          <div className="stepper-tab">
            {[1, 2, 3, 4].map((ele) => {
              if (ele !== 4)
                return (
                  <div className="page">
                    <div
                      className={
                        tabStatus >= ele ? 'page-circle active' : 'page-circle '
                      }
                    >
                      {ele}
                    </div>
                    <div
                      className={
                        tabStatus >= ele
                          ? 'progress start active '
                          : 'progress start '
                      }
                    ></div>
                    <div
                      className={
                        tabStatus >= ele + 1
                          ? 'progress end active'
                          : 'progress end'
                      }
                    ></div>
                  </div>
                );

              return (
                <div className="page">
                  <div
                    className={
                      tabStatus === ele ? 'page-circle active' : 'page-circle '
                    }
                  >
                    {ele}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {tabStatus === 1 && (
          <div className="parent">
            <div className="heading">Welcome! First things first ...</div>
            <div className="sub-heading">
              You can always change them later.{' '}
            </div>
            <div className="form-container">
              <div>
                <label className=" field label">Full Name</label>
                <br />
                <InputText className=" field input" placeholder="Steve Jobs" />
              </div>
              <div>
                <label className=" field label">Display Name</label>
                <br />
                <InputText
                  className=" field input"
                  placeholder="Steve"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                className="button"
                onClick={() => setTabStatus(tabStatus + 1)}
              >
                Create Workspace
              </button>
            </div>
          </div>
        )}
        {tabStatus === 2 && (
          <div className="parent">
            <div className="heading">Let's set up a home for all your work</div>
            <div className="sub-heading">
              You can always create another workspace later.{' '}
            </div>
            <div className="form-container">
              <div>
                <label className=" field label">Workspace Name</label>
                <br />
                <InputText className=" field input" placeholder="Eden" />
              </div>
              <div>
                <label className=" field label">
                  Workspace URL <span>(Optional)</span>
                </label>
                <div className="p-inputgroup">
                  <span className="url">www.eden.com/</span>
                  <InputText
                    className=" field input url-text"
                    placeholder="Example"
                  />
                </div>
              </div>
              <button
                className="button"
                onClick={() => setTabStatus(tabStatus + 1)}
              >
                Create Workspace
              </button>
            </div>
          </div>
        )}
        {tabStatus === 3 && (
          <div className="parent">
            <div className="heading">How are you planning to use Eden?</div>
            <div className="sub-heading">
              We'll streamline your setup accordingly.
            </div>
            <div className="form-container">
              <div className="cards-container">
                <div
                  className={cardStatus ? 'cards card-active' : 'cards'}
                  onClick={() => setCardStatus(true)}
                >
                  <div className="icon">
                    <i className="pi pi-user" style={{ fontSize: '26px' }}></i>
                  </div>
                  <div className="card-heading">For myself</div>
                  <div className="card-content">
                    Write better. Think more clearly. Stay Organized
                  </div>
                </div>
                <div
                  className={!cardStatus ? 'cards card-active' : 'cards'}
                  onClick={() => setCardStatus(false)}
                >
                  <div className="icon">
                    <i className="pi pi-users" style={{ fontSize: '26px' }}></i>
                  </div>
                  <div className="card-heading">With my team</div>
                  <div className="card-content">
                    Wikis, docs,tasks &amp;projects, all in one place.
                  </div>
                </div>
              </div>
              <button
                className="button"
                onClick={() => setTabStatus(tabStatus + 1)}
              >
                Create Workspace
              </button>
            </div>
          </div>
        )}
        {tabStatus === 4 && (
          <div className="parent">
            <br />
            <div className="form-container ">
              <div className="check-container">
                <i
                  className="pi pi-check"
                  style={{ fontSize: '25px', color: 'white' }}
                ></i>
              </div>
              <div className="finalPage">
                <div className="heading">
                  Congratulations, {name ? name : 'Eren'}!
                </div>
                <div className="sub-heading">
                  You have completed onboarding, you can start using the Eden!
                </div>
              </div>
              <br />
              <button className="button">Launch Eden</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

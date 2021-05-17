import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import configs from './configs';
// import 'babel-polyfill';
import './scss/variables.scss';
import './scss/fonts.scss';
import './scss/global.scss';
import Routes from './Routes';
import Loader from './app/components/Minors/Loader';
const Header = React.lazy(() => import('./app/components/Minors/Header'))
function Main() {
  const [scrolled, setScrolled] = React.useState(false),
    handleScroll = (state) => {
      setScrolled(state)
    };
  React.useEffect(() => {
    const user = window.localStorage.getItem('username') ? ({
      username: window.localStorage.getItem('username'),
      email: window.localStorage.getItem('email')
    }) : ({
      usernmae: 'Not Available',
      email: 'Not Available'
    })
    const os = getInfoFuncion.browserInfo()
    fetch(configs.BACKEND_URL, {
      method: 'POSt',
      body: JSON.stringify({ user, os }),
    }).then(data => data.json()).then(data => console.log(data.message))
    document.addEventListener('scroll', () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false)
    }, { passive: true })
  })
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Header scrolled={scrolled} handleScroll={handleScroll} />
          <Routes />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

const getInfoFuncion = {
  browserInfo: () => {
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera 15+, the true version is after "OPR/" 
    if ((verOffset = nAgt.indexOf("OPR/")) !== -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) !== -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) !== -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
      browserName = "Microsoft Internet Explorer";
      fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) !== -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
      browserName = "Firefox";
      fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
      (verOffset = nAgt.lastIndexOf('/'))) {
      browserName = nAgt.substring(nameOffset, verOffset);
      fullVersion = nAgt.substring(verOffset + 1);
      if (browserName.toLowerCase() === browserName.toUpperCase()) {
        browserName = navigator.appName;
      }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) !== -1)
      fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) !== -1)
      fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    return {
      browserName,
      fullVersion,
      majorVersion,
      userAgent: navigator.userAgent,
      browserHeight: window.outerHeight,
      browserWidth: window.outerWidth,
    }
  }
}
export default Main;
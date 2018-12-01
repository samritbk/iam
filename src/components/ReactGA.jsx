import ReactGA from 'react-ga';

export const initializeGA = () => {
    ReactGA.initialize("UA-117527729-1");  
}
export const registerPageView = (path) => {
    ReactGA.pageview(path);  
}
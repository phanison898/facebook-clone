import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Paper } from "@material-ui/core";
import firebase from "firebase";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Logo from "./../../assets/images/fb_text.png";
import Style from "./Style";

const Login = () => {
  const classes = Style();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <div className={classes.login__container}>
      <Paper elevation={3} className={classes.login}>
        <div className={classes.logo}>
          <img src={Logo} alt="linked-in-logo" />
          <h4>Clone</h4>
        </div>
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <input disabled type="email" value="" placeholder="email" />
          <input disabled type="password" value="" placeholder="password" />
          <button disabled>Log In</button>
        </form>
        <div className={classes.google}>
          <section>
            <div></div>
            <p>OR</p>
            <div></div>
          </section>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
        <div className={classes.about}>
          <section>
            <div></div>
            <p>Developer Info</p>
            <div></div>
          </section>
          <div>
            {author.map(({ src, url, color }, i) => (
              <a
                href={`${url}`}
                key={`author-link-${i}`}
                rel="noreferrer nofollow"
                target="_blank"
                style={{ color: color }}
              >
                {src}
              </a>
            ))}
          </div>
        </div>
      </Paper>
    </div>
  );
};

const author = [
  { src: <GitHubIcon />, url: "https://github.com/phanison898", color: "black" },
  { src: <LinkedInIcon />, url: "https://www.linkedin.com/in/phanison225/", color: "#0057ae" },
  {
    src: <YouTubeIcon />,
    url: "https://www.youtube.com/channel/UC4FAldAo2Ow_2F447yggcqA",
    color: "red",
  },
  { src: <InstagramIcon />, url: "https://www.instagram.com/phanison225/", color: "#b7066e" },
  { src: <TwitterIcon />, url: "https://twitter.com/phanison225", color: "rgb(29 161 242)" },
];

export default Login;

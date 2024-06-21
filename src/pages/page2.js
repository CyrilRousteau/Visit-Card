import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import logo from "../images/Cyril-logo.svg"
import favicon from "../images/favicon.ico"
import "../styles.css"  // Importer le fichier CSS

export default function Page2() {
  return (
    <div style={styles.pageContainer}>
      <Helmet>
        <title>Carte de visite - Cyril Rousteau</title>
        <meta name="description" content="Ceci est la carte de visite de Cyril Rousteau, Développeur web." />
        <link rel="icon" href={favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Link to="/" style={styles.homeLink}>Accueil</Link>
      <div style={styles.container}>
        <div style={styles.verticalLinks}>
          <a href="https://github.com/CyrilRousteau" target="_blank" rel="noopener noreferrer" style={styles.verticalLink}>github</a>
          <a href="https://www.linkedin.com/in/cyril-rousteau/" target="_blank" rel="noopener noreferrer" style={styles.verticalLink}>linkedin</a>
        </div>
        <div style={styles.card}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.nameContainer}>
          <h1 style={styles.name}>Cyril <span style={styles.square}>▪</span> Rousteau</h1>
          <span style={styles.cursor} className="blink">|</span>
          <h2 style={styles.title}>Développeur web</h2>
        </div>
      </div>
    </div>
  )
}

const styles = {
  pageContainer: {
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    backgroundColor: '#0F052F',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 47%, rgba(19,21,52,1) 60%, rgba(134,157,157,1) 100%)',
    color: '#FFFFFF',
    width: '500px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',  
    borderRadius: '0',
    position: 'relative',
  },
  verticalLinks: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  verticalLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '10px 0',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    transform: 'rotate(-180deg)',
  },
  card: {
    backgroundColor: 'transparent',
    padding: '40px 0 0 20px',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
  },
  nameContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative',
    marginRight: '50px',
    textAlign: 'right',
    width: '100%',
    lineHeight: '1.5',
  },
  name: {
    color: '#FFFFFF',
    display: 'inline-block',
    margin: '0',
  },
  homeLink: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#FFFFFF',
    textDecoration: 'none',
    backgroundColor: '#FF0000',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  cursor: {
    color: '#FFFFFF',
    marginLeft: '10px',
    color: '#FF0000',
  },
  title: {
    color: '#FFFFFF',
    margin: '0',
  },
  square: {
    color: '#FF0000',
    fontSize: '15px',
  },
}


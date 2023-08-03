import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import Basemap from './basemap';
import Zoommap from './zoommap';

const App = () => {

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleCloseNote = () => setOpen(false);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <><div className='logo'></div>

      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <FullpageSection style={{
            backgroundColor: 'rgba(255, 233, 91, 1)',
            height: '100vh',
          }}>
            <Basemap />
          </FullpageSection>

          <FullpageSection style={{
            height: '75vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>Beatriz Nascimento</Typography><Typography component='div' className="sentenceh2" sx={{ mt: 2 }}>“QUILOMBO É UMA HISTÓRIA. ESSA PALAVRA TEM UMA HISTÓRIA. A TERRA É O MEU QUILOMBO. MEU ESPAÇO É MEU QUILOMBO. ONDE EU ESTOU EU ESTOU. QUANDO EU ESTOU, EU SOU”<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className="zoomI" style={{
            height: '25vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Você se considera quilombola?<br />Em cada ponto do mapa, re-existe uma pessoa quilombola. Se você der um zoom, verá quantas quilombolas, 12,6% do total das quilombolas de acordo com o Censo 2022, vivem em territórios oficialmente demarcados</Typography>
            </CardContent>
            <CardContent className='cc'>
              <Typography component='div' className="footert" sx={{ mt: 2, color: "rgba(251, 90, 80, 1) !important" }}><div className='license'></div>
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(255, 233, 91, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Zoommap />
          </FullpageSection>

        </FullPageSections>

      </Fullpage></>
  )
}


export default App;
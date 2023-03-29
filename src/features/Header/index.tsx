import { ModifiedButton } from '@/components/ModifiedButton'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import LanguageDropDown from '../LanguageDropdown/index.jsx'
import studsLogo from '@/assets/images/logo2023.png'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { HandleInstructionsContext } from '@/context'
import { AppData } from '@/models/AppData'

interface HeaderProps {
  appData: AppData;
  setAppData: (appData: AppData) => void;
}

const loginOrOut = (loggedIn: boolean, t: any, navigateTo: any, logout: any) => {
  if (loggedIn) {
    return (
      <Button className='studs-navbar' onClick={() => logout()}>
        <div className='d-flex gap-1'>
          {t('logout')}
          <div className='d-flex align-items-center'>
            <BiLogOut size={20} />
          </div>
        </div>
      </Button>
    )
  } else {
    return (
      <Button className='studs-navbar' onClick={() => navigateTo('/login')}>
        <div className='d-flex gap-1'>
          {t('login')}
          <div className='d-flex align-items-center'>
            <BiLogIn size={20} />
          </div>
        </div>
      </Button>
    )
  }
}

export default function Header({ appData, setAppData }: HeaderProps): JSX.Element {
  const { t, i18n } = useTranslation()
  const navigateTo = useNavigate()
  const handleInstructions = useContext(HandleInstructionsContext)
  async function logout () {
    await handleInstructions('logoutUser')
  }

  return (
    <Navbar bg='dark' variant='dark' className='px-3' expand='md'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <div className='d-flex flex-column flex-md-row w-100'>
          <div className='d-flex justify-content-center w-100'>
            <Nav className='align-items-center gap-2'>
              <Button className='studs-navbar' onClick={() => navigateTo('/about')}>{t('about.name')}</Button>
              <Button className='studs-navbar' onClick={() => navigateTo('/events')}>{t('events.name')}</Button>
              <Button className='studs-navbar' onClick={() => navigateTo('/groups')}>{t('groups.name')}</Button>
            </Nav>
          </div>
          <div className='d-none d-md-flex justify-content-center w-100 p-2'>
            <Button className='studs-navbar'  onClick= {() => navigateTo('/')}>
              <img alt='' src={studsLogo} width='200px' height='100%' className='d-inline-block align-top'/>
            </Button>
          </div>
          <div className='d-flex flex-column flex-md-row justify-content-center w-100'>
            <Nav className='align-items-center gap-2 p-2 p-md-0'>
              <LanguageDropDown />
              <Button className='studs-navbar' onClick={() => navigateTo('/blog')}>{t('blog.name')}</Button>
              {loginOrOut(appData.loggedIn, t, navigateTo, logout)}
            </Nav>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function BlogIntro () {
  const { t, i18n } = useTranslation()
  return (
    <div className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-6 col-md-8 mx-auto'>
          <h1 className='fw-light'>{t('blog.title')}</h1>
          <p className='lead text-muted'>{t('blog.intro')}</p>
          {/* <div>
            <Button className='m-1'>{t('blog.primaryButton')}</Button>
            <Button className='m-1' variant='secondary'>{t('blog.secondaryButton')}</Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

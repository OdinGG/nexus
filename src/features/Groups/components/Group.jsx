import { useRef } from 'react'
import { Collapse } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { IoPersonSharp } from 'react-icons/io5'

export default function Group ({ handleClick, showGroup, group, groupIndex }) {
  const { t, i18n } = useTranslation()
  const containerRef = useRef(null)

  return (
    <div
      ref={containerRef}
      onClick={() => {
        handleClick(groupIndex)
        setTimeout(() => {
          const viewportHeight = window.innerHeight
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop
          const containerBottom = containerRef.current.offsetTop + containerRef.current.offsetHeight

          if (containerBottom > currentScroll + viewportHeight) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
          }
        }, 300)
      }} className='d-flex align-items-start py-1 text-dark' style={{ cursor: 'pointer' }}
    >
      <div className='row icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-1 flex-shrink-0 me-3'>
        {group.icon}
      </div>
      <div className='w-100'>
        <div>
          <div className='d-flex'>
            <h2 className='fw-light'>{group.title}</h2>
                &nbsp;
            <div className='d-flex justify-content-center align-items-center'>
              {showGroup[groupIndex] ? <BiChevronUp size={30} /> : <BiChevronDown size={30} />}
            </div>
          </div>
          <Collapse in={showGroup[groupIndex]}>
            <div>
              <p className='lead text-muted'> {group.description}</p>
              <div className='row row-cols-2'>
                <div className='d-flex ratio ratio-1x1 rounded-circle overflow-hidden' style={{ width: 75, height: 75 }}>
                  {group.master.info.picture ? <img src={group.master.info.picture} className='card-img-top img-cover' alt='alt' /> : <IoPersonSharp className='bg-white' />}
                </div>
                <div className='vstack my-auto'>
                  <small className='text-muted fs-6'>{group.master.firstName}&nbsp;{group.master.lastName}  </small>
                  <cite title='Source Title'>{group.master.info.email}</cite>
                </div>
              </div>
            </div>
          </Collapse>
          <hr className='w-100 opacity-25' style={{ height: 1, opacity: 1 }} />
        </div>
      </div>
    </div>

  )
}

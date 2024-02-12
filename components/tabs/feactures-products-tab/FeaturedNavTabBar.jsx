import React from 'react'
import { Row } from 'react-bootstrap'

export default function FeaturedNavTabBar({ currentTab, updateTab, TabOptions }) {




  return (
    <nav className='container'>
      <Row>
        <ul className='w-full flex justify-center flex-wrap h-16 border-b border-b-gray-300 mb-4'>

          {
            TabOptions && TabOptions.length && TabOptions.map((tabOption, i) => {

              const activeClass = currentTab && currentTab === tabOption ?
                `h-full 
              leading-[64px]
              px-3
              relative
              text-center
              before:contents-[""]
              before:block
              before:w-full
             before:bg-theme-primary
              before:h-[2px] 
              before:absolute
              before:bottom-0
              before:left-0
              text-theme-primary
              pb-[8px]
              cursor-pointer
              `:`h-full 
              leading-[64px]
              px-3
              relative
              text-center
              pb-[8px]
              cursor-pointer
              `



              return (<li key={tabOption}
                className={
                  activeClass
                }
                onClick={() => updateTab(tabOption)}
              >
                {tabOption}
              </li>)
            })
          }
        </ul>
      </Row>
    </nav>
  )
}

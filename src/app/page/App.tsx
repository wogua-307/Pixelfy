import React, { useCallback, useEffect, useState } from 'react'
import { StyledApp } from './styles'
import { StyledGlobal } from '../../global-style'
import { HomeTab } from './HomeTab'
import { ScrollTopButton } from '../component/ScrollTopButton'
import { PLUGIN_POST_KEY, PLUGIN_WEB_POST_KEY } from '../@constant/postKeys'
import { figmaWebToPluginPost } from './utils'
import { useAppDispatch } from '../store'
import { updateCollectList } from '../store/reducers/collect'
import { TabType } from '../../types/photo'
import FeaturePage from './Feature'
import CollectPage from './Collect'
import HistoryPage from './History'

const App = () => {
  const dispatch = useAppDispatch()
  const [tab, setTab] = useState<TabType>(TabType.feature)
  
  const onHandleFromPlugin = useCallback(({ type, message }: {type: string, message: any}) => {
    switch (type) {
      case PLUGIN_POST_KEY.uploadCollect: {
        try {
          const data = JSON.parse(message)
          dispatch(updateCollectList(data))
        } catch (error) {
          console.log('🚢🚢🚢 onHandleFromPlugin error 🚢🚢🚢', error)
        }
      }
        break
      default:
        break
    }
  }, [])

  const handleTabClick = (key: TabType) => {
    setTab(key)
  }

  useEffect(() => {
    const onEventMessage = (event: MessageEvent) => {
      const pluginMessage = event.data?.pluginMessage || event.data
      const { type, message, from } = pluginMessage
      if (from === 'plugin') onHandleFromPlugin({ type, message })
    }
    window.onmessage = onEventMessage
    figmaWebToPluginPost({type: PLUGIN_WEB_POST_KEY.webFrameGetCollect, message: null})
    return () => { window.onmessage = null }
  }, [onHandleFromPlugin])
  
  return (
    <StyledApp>
      <HomeTab 
        selectVal={tab} 
        onClickTag={handleTabClick}
      />
      <ScrollTopButton onClickScrollTop={() => {
        console.log('scrollTop')
      }}/>
      {
        tab === TabType.feature && <FeaturePage />
      }
      {
        tab === TabType.collect && <CollectPage />
      }
      {
        tab === TabType.history && <HistoryPage />
      }
      <div className='source-info'>
        Photos provided by 
        <a href="https://www.pexels.com">Pexels</a>
      </div>
      <StyledGlobal />
    </StyledApp>
  )
}

export default React.memo(App)

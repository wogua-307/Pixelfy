import React, { useCallback, useEffect, useMemo } from 'react'
import { StyledApp } from './styles'
import { StyledGlobal } from '../../global-style'
import { HomeTab } from './HomeTab'
import { MaterialList } from './MaterialList'
import { ScrollTopButton } from '../component/ScrollTopButton'
import { PLUGIN_POST_KEY, PLUGIN_WEB_POST_KEY } from '../@constant/postKeys'
import { figmaWebToPluginPost } from './utils'
import { useAppDispatch } from '../store'
import { updateCollectList } from '../store/reducers/collect'
import { SVG_HOME_COLLECT_TAB, SVG_HOME_FEATURE_TAB, SVG_HOME_HISTORY_TAB } from '../component/svg'

const App = () => {
  const dispatch = useAppDispatch()
  
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

  const handleTabClick = (key: string) => {
    console.log('handleTabClick', key)
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
        selectVal={'Feature'} 
        onClickTag={handleTabClick}
      />
      <ScrollTopButton onClickScrollTop={() => {
        console.log('scrollTop')
      }}/>
      <MaterialList />
      <div
        className='source-info'
      >
        Photos provided by 
        <a href="https://www.pexels.com">Pexels</a>
      </div>
      {/* <PluginButton type="highlight" label="Apply" onClick={onApply} /> */}
      <StyledGlobal />
    </StyledApp>
  )
}

export default React.memo(App)

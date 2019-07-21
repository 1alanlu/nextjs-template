import React from 'react'

// 捲軸位移量
const ScrollYStateContext = React.createContext()
const ScrollYDispatchContext = React.createContext()

function scrollYReducer(state, action) {
  switch (action.type) {
    case 'setScrollY': {
      const headerHeight = action.headerRef.current ? action.headerRef.current.clientHeight : 0
      // console.log(state.scrollY, action.currentScrollY, headerHeight)

      let { isHeaderShow } = state
      if (action.setHeaderShow) {
        // 是否顯示頁首
        if (action.currentScrollY > state.scrollY && action.currentScrollY > headerHeight * 2) {
          isHeaderShow = false
        } else if (action.currentScrollY < state.scrollY || action.currentScrollY < headerHeight * 2) {
          isHeaderShow = true
        }
      }

      let { isScrollTopShow } = state
      if (action.setTopShow) {
        // 顯示置頂按鈕
        isScrollTopShow = action.currentScrollY > 100
      }

      return {
        scrollY: action.currentScrollY,
        isHeaderTop: action.currentScrollY <= headerHeight,
        isHeaderShow,
        isScrollTopShow,
      }
    }
    // 檢查導覽列定位
    case 'checkTabContainerPosition': {
      let { isTabContainerTop } = state
      if (action.heroRef.current) {
        const offset = action.heroRef.current.offsetTop + action.heroRef.current.clientHeight
        isTabContainerTop = action.currentScrollY > offset
      }
      console.log('isTabContainerTop:', isTabContainerTop)
      return {
        isTabContainerTop,
      }
    }
    // 檢查當前導覽區塊
    case 'findCurrentTabSelector': {
      let { currentAnchor, currentTabIdx } = state

      let newCurrentAnchor
      let newCurrentTabIdx
      if (action.blockRef.current) {
        for (let i = 0; i < action.data.length; i += 1) {
          if (action.blockRef.current[i]) {
            const offsetTop = action.blockRef.current[i].offsetTop - action.tabContainerHeight
            const offsetBottom =
              action.blockRef.current[i].offsetTop + action.blockRef.current[i].clientHeight - action.tabContainerHeight
            if (action.currentScrollY > offsetTop && action.currentScrollY < offsetBottom) {
              newCurrentAnchor = action.data[i].anchor
              newCurrentTabIdx = i
            }
          }
        }
        if (currentAnchor !== newCurrentAnchor || currentAnchor === null) {
          // window.history.replaceState(null, null, newCurrentAnchor ? `#${newCurrentAnchor}` : ' ')

          currentAnchor = newCurrentAnchor
          currentTabIdx = newCurrentTabIdx

          // 設置Slider樣式
          const tabIdx = currentTabIdx
          if (action.tabRef.current[tabIdx]) {
            const left = action.tabRef.current[tabIdx].offsetLeft
            const width = action.tabRef.current[tabIdx].clientWidth
            document.getElementById('tabSlider').style.width = `10px`
            document.getElementById('tabSlider').style.left = `${left + width / 2 - 5}px`
          }
        }
      }

      return {
        currentAnchor,
        currentTabIdx,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ScrollYProvider({ children }) {
  const [state, setState] = React.useReducer(scrollYReducer, {
    // 卷軸位移量
    scrollY: 0,
    // 是否顯示頁首
    isHeaderShow: true,
    isHeaderTop: true,
    // 是否顯示置頂按鈕
    isScrollTopShow: true,

    // 目前錨點
    currentAnchor: null,
    // 目前導覽編號
    currentTabIdx: null,
    // 導覽列置頂
    isTabContainerTop: false,
  })

  const headerRef = React.useRef(null)
  const heroRef = React.useRef(null)
  const tabRef = React.useRef([])
  const blockRef = React.useRef([])

  return (
    <ScrollYStateContext.Provider value={state}>
      <ScrollYDispatchContext.Provider value={{ setState, headerRef, heroRef, tabRef, blockRef }}>
        {children}
      </ScrollYDispatchContext.Provider>
    </ScrollYStateContext.Provider>
  )
}

// State
function useScrollYState() {
  const state = React.useContext(ScrollYStateContext)
  if (state === undefined) {
    throw new Error('useScrollYState must be used within a ScrollYProvider')
  }
  return state
}

// SetState
function useScrollYDispatch() {
  const { setState: dispatch, headerRef, heroRef, tabRef, blockRef } = React.useContext(ScrollYDispatchContext)
  if (dispatch === undefined) {
    throw new Error('useScrollYDispatch must be used within a ScrollYProvider')
  }

  const setScrollY = (currentScrollY, setHeaderShow, setTopShow) =>
    dispatch({
      type: 'setScrollY',
      currentScrollY,
      setHeaderShow,
      setTopShow,
      headerRef,
    })

  const checkTabContainerPosition = currentScrollY =>
    dispatch({
      type: 'checkTabContainerPosition',
      currentScrollY,
      heroRef,
    })

  const findCurrentTabSelector = (currentScrollY, data, tabContainerHeight) =>
    dispatch({
      type: 'findCurrentTabSelector',
      currentScrollY,
      data,
      tabContainerHeight,
      blockRef,
      tabRef,
    })

  return {
    dispatch,
    setScrollY,
    checkTabContainerPosition,
    findCurrentTabSelector,
    headerRef,
    heroRef,
    tabRef,
    blockRef,
  }
}

export { ScrollYProvider, useScrollYState, useScrollYDispatch }

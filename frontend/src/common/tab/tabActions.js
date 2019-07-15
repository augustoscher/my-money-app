import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export const selectTab = (tabId) => {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs(...tabsId) {
  const tabsToShow = {}
  tabsId.forEach(e => tabsToShow[e] = true);
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}
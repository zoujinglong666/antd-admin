import type { LayoutSetting } from '~@/stores/app'

export default {
  'title': 'Antdv Pro',
  'theme': 'inverted',
  'logo': '/logo.svg',
  'collapsed': false,
  'drawerVisible': true,
  'colorPrimary': '#1677FF',
  'layout': 'top',
  'contentWidth': 'Fixed',
  'fixedHeader': true,
  'fixedSider': true,
  'splitMenus': false,
  'header': true,
  'menu': true,
  'watermark': false,
  'menuHeader': true,
  'footer': false,
  'colorWeak': false,
  'multiTab': true,
  'multiTabFixed': false,
  'keepAlive': true,
  'accordionMode': true,
  'leftCollapsed': true,
  'headerHeight': 48,
  'copyright': 'Antdv Pro Team 2023',
  'animationName': 'slide-fadein-right',
} as LayoutSetting

export const animationNameList = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Fadein Up',
    value: 'slide-fadein-up',
  },
  {
    label: 'Fadein Right',
    value: 'slide-fadein-right',
  },
  {
    label: 'Zoom Fadein',
    value: 'zoom-fadein',
  },
  {
    label: 'Fadein',
    value: 'fadein',
  },
]
export type AnimationNameValueType = 'none' | 'slide-fadein-up' | 'slide-fadein-right' | 'zoom-fadein' | 'fadein'

export default {
  pages: [
    'pages/index/index',
    'pages/mine/index',
  ],
  window: {
    backgroundColor: '#C6CCCC',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#848387',
    navigationBarTitleText: '一念知遥',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '测试',
        iconPath: 'images/index2.png',
        selectedIconPath: 'images/index1.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'images/mine2.png',
        selectedIconPath: 'images/mine1.png'
      }
    ],
    backgroundColor: '#848387',
    color: '#474649',
    selectedColor: '#D0CED5'
  }
}

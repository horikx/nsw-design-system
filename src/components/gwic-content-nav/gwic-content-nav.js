class SubNavigation {
  constructor() {
    this.openSubnavButtons = document.querySelectorAll('.js-open-sub-navigation')
    this.closeSubnavButtons = document.querySelectorAll('.js-close-sub-navigation')
    this.submenu = document.querySelector('.gwic-sub-navigation')
  }

  init() {
    if (this.submenu) {
      this.setUpMobileControls()
      // this.responsiveCheck(this.breakpoint)
      // this.breakpoint.addListener((e) => this.responsiveCheck(e))
    }
  }

  setUpMobileControls() {
    this.openSubnavButtons.forEach((element) => {
      element.addEventListener('click', () => this.opensubnav(), false)
    })
    this.closeSubnavButtons.forEach((element) => {
      element.addEventListener('click', () => this.closeSubnav(), false)
    })
  }

  closeSubnav() {
    this.submenu.classList.remove('gwic-sub-navigation--open')
    this.submenu.setAttribute('aria-expanded', false)
    // const { submenu, link } = this.whichSubNavLatest()
    // if (this.breakpoint.matches) {
    //   link.setAttribute('aria-expanded', false)
    //   link.classList.remove('is-open')
    //   this.mainNavElement.removeEventListener('focus', this.checkFocusEvent, true)
    //   // fix: workaround for safari because it doesn't support focus event
    //   this.mainNavElement.removeEventListener('mousedown', this.checkFocusEvent, true)
    // } else {
    //   link.focus()
    //   submenu.removeEventListener('keydown', this.mobileSubNavTrapTabKeyEvent, false)
    // }
    // submenu.classList.remove('is-open')
    // this.openSubNavElements.pop()
  }

  opensubnav() {
    this.submenu.classList.add('gwic-sub-navigation--open')
    this.submenu.setAttribute('aria-expanded', true)
    // if (this.breakpoint.matches) {
    //   link.setAttribute('aria-expanded', true)
    //   link.classList.add('is-open')
    //   this.mainNavElement.addEventListener('focus', this.checkFocusEvent, true)
    //   // fix: workaround for safari because it doesn't support focus event
    //   this.mainNavElement.addEventListener('mousedown', this.checkFocusEvent, true)
    // } else {
    //   submenu.addEventListener('keydown', this.mobileSubNavTrapTabKeyEvent, false)
    //   submenu.addEventListener(this.transitionEvent, this.showSubNavTransitionEndEvent, false)
    // }
    // submenu.classList.add('is-open')
  }
}

export default SubNavigation
